import React, { useState } from "react";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";

// Duration Pill Component
interface DurationPillProps {
  duration: number;
  isSelected: boolean;
  onPress: () => void;
}

function DurationPill({ duration, isSelected, onPress }: DurationPillProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-full px-6 py-3 ${
        isSelected
          ? "bg-luma-accent-orange"
          : "border-2 border-luma-text-medium bg-white"
      }`}
    >
      <Text
        className={`text-center font-semibold ${
          isSelected ? "text-white" : "text-luma-text-medium"
        }`}
      >
        {duration} min
      </Text>
    </Pressable>
  );
}

// Priority Button Component
interface PriorityButtonProps {
  label: string;
  color: string;
  isSelected: boolean;
  onPress: () => void;
}

function PriorityButton({
  label,
  color,
  isSelected,
  onPress,
}: PriorityButtonProps) {
  const colorMap: { [key: string]: string } = {
    low: "bg-luma-accent-blue",
    medium: "bg-luma-accent-purple",
    high: "bg-luma-accent-orange",
  };

  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 items-center rounded-xl px-4 py-3 ${
        isSelected ? colorMap[color] : "border-2 border-luma-text-medium bg-white"
      }`}
    >
      <Text
        className={`font-semibold ${
          isSelected ? "text-white" : "text-luma-text-medium"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

// Header Component
function Header() {
  return (
    <View className="mb-8">
      <Text className="text-3xl font-semibold text-luma-text-dark">
        Add Task
      </Text>
      <Text className="mt-2 text-base text-luma-text-medium">
        What do you want to focus on?
      </Text>
    </View>
  );
}

// Task Name Input Component
interface TaskNameInputProps {
  value: string;
  onChange: (text: string) => void;
}

function TaskNameInput({ value, onChange }: TaskNameInputProps) {
  return (
    <View className="mb-8">
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Task name"
        placeholderTextColor="#8B8B8B"
        className="rounded-2xl border-2 border-luma-text-medium bg-white px-6 py-4 text-lg text-luma-text-dark"
      />
    </View>
  );
}

// Focus Duration Selector Component
interface FocusDurationSelectorProps {
  selected: number;
  onSelect: (duration: number) => void;
}

function FocusDurationSelector({
  selected,
  onSelect,
}: FocusDurationSelectorProps) {
  const durations = [25, 50, 90];

  return (
    <View className="mb-8">
      <Text className="mb-4 text-base font-semibold text-luma-text-dark">
        Focus Duration
      </Text>
      <View className="flex-row gap-3">
        {durations.map((duration) => (
          <View key={duration} className="flex-1">
            <DurationPill
              duration={duration}
              isSelected={selected === duration}
              onPress={() => onSelect(duration)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

// Priority Selector Component
interface PrioritySelectorProps {
  selected: string;
  onSelect: (priority: string) => void;
}

function PrioritySelector({ selected, onSelect }: PrioritySelectorProps) {
  const priorities = [
    { label: "Low", color: "low" },
    { label: "Medium", color: "medium" },
    { label: "High", color: "high" },
  ];

  return (
    <View className="mb-8">
      <Text className="mb-4 text-base font-semibold text-luma-text-dark">
        Priority
      </Text>
      <View className="flex-row gap-3">
        {priorities.map((priority) => (
          <PriorityButton
            key={priority.color}
            label={priority.label}
            color={priority.color}
            isSelected={selected === priority.color}
            onPress={() => onSelect(priority.color)}
          />
        ))}
      </View>
    </View>
  );
}

// Primary Action Button Component
interface ActionButtonProps {
  onPress: () => void;
}

function ActionButton({ onPress }: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-full bg-luma-accent-orange px-12 py-4"
    >
      <Text className="text-center text-lg font-semibold text-white">
        Start Focus
      </Text>
    </Pressable>
  );
}

// Main Add Task Screen Component
export default function AddTaskScreen() {
  const [taskName, setTaskName] = useState("");
  const [focusDuration, setFocusDuration] = useState(25);
  const [priority, setPriority] = useState("medium");

  const handleStartFocus = () => {
    // Placeholder for navigation to focus screen
    console.log({
      taskName,
      focusDuration,
      priority,
    });
  };

  return (
    <ScrollView className="flex-1 bg-luma-bg px-6">
      {/* Header */}
      <View className="pt-10 pb-4">
        <Header />
      </View>

      {/* Task Name Input */}
      <TaskNameInput value={taskName} onChange={setTaskName} />

      {/* Focus Duration Selector */}
      <FocusDurationSelector selected={focusDuration} onSelect={setFocusDuration} />

      {/* Priority Selector */}
      <PrioritySelector selected={priority} onSelect={setPriority} />

      {/* Action Button */}
      <View className="pb-10 pt-6">
        <ActionButton onPress={handleStartFocus} />
      </View>
    </ScrollView>
  );
}
