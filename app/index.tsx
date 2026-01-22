import { Router, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";

// Mock data for tasks
const mockTasks = [
  {
    id: 1,
    title: "Morning Meditation",
    duration: "15 minutes",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Review Focus Goals",
    duration: "10 minutes",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Deep Work Session",
    duration: "90 minutes",
    priority: "high",
    completed: true,
  },
];

// Greeting Component
function GreetingSection() {
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <View className="px-6 pt-8 pb-4">
      <Text className="text-3xl font-semibold text-luma-text-dark">
        Good morning
      </Text>
      <Text className="mt-1 text-base text-luma-text-medium">{dateString}</Text>
    </View>
  );
}

// Focus Summary Card Component
function FocusSummaryCard() {
  return (
    <View className="mx-6 mb-8 overflow-hidden rounded-2xl bg-white">
      <View className="h-2 bg-luma-accent-orange" />
      <View className="px-6 py-6">
        <Text className="text-sm font-medium text-luma-text-medium">
          Your Progress
        </Text>
        <View className="mt-4 flex-row justify-between">
          <View>
            <Text className="text-2xl font-semibold text-luma-text-dark">
              45 min
            </Text>
            <Text className="mt-1 text-xs text-luma-text-medium">
              Focused today
            </Text>
          </View>
          <View className="items-end">
            <Text className="text-2xl font-semibold text-luma-text-dark">
              3 / 6
            </Text>
            <Text className="mt-1 text-xs text-luma-text-medium">
              Tasks done
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// Individual Task Card Component
interface TaskCardProps {
  task: typeof mockTasks[0];
  onPress: (id: number) => void;
  isCompleted: boolean;
}

function TaskCard({ task, onPress, isCompleted }: TaskCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-luma-accent-orange";
      case "medium":
        return "bg-luma-accent-purple";
      case "low":
        return "bg-luma-accent-blue";
      default:
        return "bg-luma-accent-green";
    }
  };

  return (
    <Pressable
      onPress={() => onPress(task.id)}
      className="mx-6 mb-3 flex-row items-center rounded-xl bg-white px-4 py-4"
    >
      {/* Checkbox */}
      <View
        className={`h-6 w-6 rounded-full border-2 ${
          isCompleted
            ? "border-luma-accent-green bg-luma-accent-green"
            : "border-luma-text-medium"
        } items-center justify-center`}
      >
        {isCompleted && (
          <Text className="text-sm font-bold text-white">✓</Text>
        )}
      </View>

      {/* Task Content */}
      <View className="ml-4 flex-1">
        <Text
          className={`text-base font-medium ${
            isCompleted
              ? "text-luma-text-medium line-through"
              : "text-luma-text-dark"
          }`}
        >
          {task.title}
        </Text>
        <Text className="mt-1 text-xs text-luma-text-medium">
          {task.duration}
        </Text>
      </View>

      {/* Priority Indicator */}
      <View className={`h-3 w-3 rounded-full ${getPriorityColor(task.priority)}`} />
    </Pressable>
  );
}

// Task List Section Component
interface TaskListProps {
  tasks: typeof mockTasks;
  completedTasks: Set<number>;
  onTaskPress: (id: number) => void;
}

function TaskListSection({ tasks, completedTasks, onTaskPress }: TaskListProps) {
  return (
    <View className="mt-2">
      <View className="mb-4 px-6">
        <Text className="text-lg font-semibold text-luma-text-dark">
          Today's Tasks
        </Text>
      </View>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onPress={onTaskPress}
          isCompleted={completedTasks.has(task.id)}
        />
      ))}
    </View>
  );
}

const router = useRouter();
// Floating Action Button Component
interface FABProps {
  onPress: () => void;
}

function FloatingActionButton({ onPress }: FABProps) {
  return (
    <Pressable
      onPress={onPress}
      className="absolute bottom-8 right-8 h-16 w-16 items-center justify-center rounded-full bg-luma-accent-orange"
    >
      <Text className="text-3xl font-bold text-white">+</Text>
    </Pressable>
  );
}

// Main Home Screen Component
export default function HomeScreen() {
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set([3]));

  const handleTaskPress = (taskId: number) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const handleFABPress = () => {
    // Placeholder for navigation to add task screen
    console.log("Navigate to add task screen");
  };

  return (
    <View className="flex-1 bg-luma-bg">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <GreetingSection />
        <FocusSummaryCard />
        <TaskListSection
          tasks={mockTasks}
          completedTasks={completedTasks}
          onTaskPress={handleTaskPress}
        />
        <View className="h-24" />
      </ScrollView>
      <FloatingActionButton onPress={handleFABPress} />
    </View>
  );
}
