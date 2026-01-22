import { create } from "zustand";

export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  duration: number; // minutes
  priority: Priority;
  createdAt: number;
}

export interface FocusSession {
  taskId: string;
  duration: number; // minutes
  completedAt: number;
}

interface TaskStore {
  tasks: Task[];
  sessions: FocusSession[];

  addTask: (task: Task) => void;
  completeSession: (session: FocusSession) => void;

  // selectors for Insights
  getTotalFocusTime: () => number;
  getSessionsCount: () => number;
  getWeeklyFocus: () => Record<string, number>;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  sessions: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [task, ...state.tasks],
    })),

  completeSession: (session) =>
    set((state) => ({
      sessions: [session, ...state.sessions],
    })),

  getTotalFocusTime: () =>
    get().sessions.reduce((sum, s) => sum + s.duration, 0),

  getSessionsCount: () => get().sessions.length,

  getWeeklyFocus: () => {
    const result: Record<string, number> = {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    };

    get().sessions.forEach((session) => {
      const day = new Date(session.completedAt).toLocaleDateString("en-US", {
        weekday: "short",
      });
      result[day] += session.duration;
    });

    return result;
  },
}));
