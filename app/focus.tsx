import React, { useEffect, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useTaskStore } from "@/src/store/task.store";

// Timer Display Component
function TimerDisplay({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) {
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <View className="items-center justify-center">
      <View className="h-60 w-60 items-center justify-center rounded-full border-8 border-luma-accent-purple bg-white">
        <Text className="text-6xl font-bold text-luma-text-dark">
          {formattedTime}
        </Text>
      </View>
    </View>
  );
}

// Action Buttons Component
interface ActionButtonsProps {
  isRunning: boolean;
  onStartPause: () => void;
  onEndSession: () => void;
}

function ActionButtons({
  isRunning,
  onStartPause,
  onEndSession,
}: ActionButtonsProps) {
  return (
    <View className="gap-4">
      <Pressable
        onPress={onStartPause}
        className="rounded-full bg-luma-accent-orange px-12 py-4"
      >
        <Text className="text-center text-lg font-semibold text-white">
          {isRunning ? "Pause" : "Start"}
        </Text>
      </Pressable>

      <Pressable
        onPress={onEndSession}
        className="rounded-full border-2 border-luma-text-medium bg-white px-12 py-4"
      >
        <Text className="text-center text-lg font-semibold text-luma-text-medium">
          End Session
        </Text>
      </Pressable>
    </View>
  );
}

// Helper Text Component
function HelperText() {
  return (
    <Text className="text-center text-sm text-luma-text-medium">
      Stay focused. Notifications are paused.
    </Text>
  );
}

// Header Section Component
function HeaderSection({ taskName }: { taskName: string }) {
  return (
    <View className="items-center">
      <Text className="text-sm font-medium text-luma-text-medium">
        Focus Mode
      </Text>
      <Text className="mt-2 text-2xl font-semibold text-luma-text-dark">
        {taskName}
      </Text>
    </View>
  );
}

// Main Focus Screen Component
export default function FocusScreen() {
//   const { taskName = "Focus Session", duration = "25" } =
//     useLocalSearchParams();

const { taskId, duration = "25" } = useLocalSearchParams();
    const { taskName  } = useLocalSearchParams();
const completeSession = useTaskStore((s) => s.completeSession);


  const totalMinutes = Number(duration);

  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalMinutes * 60);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Core timer logic
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleEndSession = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  completeSession({
    taskId: String(taskId),
    duration: totalMinutes,
    completedAt: Date.now(),
  });

  setIsRunning(false);
  router.back();
};


  return (
    <View className="flex-1 bg-luma-bg px-6">
      {/* Top Section */}
      <View className="flex-1 items-center justify-start pt-12">
        <HeaderSection taskName={String(taskName)} />
      </View>

      {/* Main Timer Section */}
      <View className="flex-1 items-center justify-center">
        <TimerDisplay minutes={minutes} seconds={seconds} />
      </View>

      {/* Action Buttons and Helper Text Section */}
      <View className="flex-1 items-center justify-end pb-12">
        <ActionButtons
          isRunning={isRunning}
          onStartPause={handleStartPause}
          onEndSession={handleEndSession}
        />
        <View className="mt-6">
          <HelperText />
        </View>
      </View>
    </View>
  );
}
