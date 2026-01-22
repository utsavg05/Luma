import React from "react";
import { View, Text, ScrollView } from "react-native";

// Header Component
function Header() {
  return (
    <View className="mb-8">
      <Text className="text-3xl font-semibold text-luma-text-dark">
        Your Progress
      </Text>
      <Text className="mt-2 text-base text-luma-text-medium">
        This week at a glance
      </Text>
    </View>
  );
}

// Summary Card Component
interface SummaryCardProps {
  title: string;
  value: string;
  accentColor: string;
}

function SummaryCard({ title, value, accentColor }: SummaryCardProps) {
  return (
    <View className="mb-4 overflow-hidden rounded-2xl bg-white">
      <View className={`h-1 ${accentColor}`} />
      <View className="px-6 py-4">
        <Text className="text-sm font-medium text-luma-text-medium">{title}</Text>
        <Text className="mt-2 text-3xl font-bold text-luma-text-dark">
          {value}
        </Text>
      </View>
    </View>
  );
}

// Weekly Chart Component
interface ChartBarProps {
  day: string;
  height: number;
  color: string;
}

function ChartBar({ day, height, color }: ChartBarProps) {
  const maxHeight = 120; // Max height in pixels
  const barHeight = (height / 100) * maxHeight; // Calculate proportional height

  return (
    <View className="flex-1 items-center">
      <View className="items-center justify-end" style={{ height: maxHeight }}>
        <View
          className={`w-6 rounded-t-lg ${color}`}
          style={{ height: barHeight || 4 }}
        />
      </View>
      <Text className="mt-2 text-xs text-luma-text-medium">{day}</Text>
    </View>
  );
}

function WeeklyChart() {
  // Mock data: hours for each day (Mon-Sun)
  const weekData = [
    { day: "Mon", hours: 45, color: "bg-luma-accent-orange" },
    { day: "Tue", hours: 60, color: "bg-luma-accent-purple" },
    { day: "Wed", hours: 75, color: "bg-luma-accent-blue" },
    { day: "Thu", hours: 55, color: "bg-luma-accent-green" },
    { day: "Fri", hours: 80, color: "bg-luma-accent-orange" },
    { day: "Sat", hours: 30, color: "bg-luma-accent-purple" },
    { day: "Sun", hours: 25, color: "bg-luma-accent-blue" },
  ];

  return (
    <View className="mb-8 rounded-2xl bg-white px-6 py-6">
      <Text className="mb-4 text-base font-semibold text-luma-text-dark">
        Weekly Activity
      </Text>
      <View className="flex-row justify-between gap-2">
        {weekData.map((data) => (
          <ChartBar
            key={data.day}
            day={data.day}
            height={data.hours}
            color={data.color}
          />
        ))}
      </View>
    </View>
  );
}

// Highlight Card Component
interface HighlightItemProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

function HighlightItem({ title, value, icon, color }: HighlightItemProps) {
  return (
    <View className="mb-3 overflow-hidden rounded-xl bg-white">
      <View className="flex-row items-center px-4 py-4">
        <View
          className={`h-12 w-12 items-center justify-center rounded-lg ${color}`}
        >
          <Text className="text-2xl">{icon}</Text>
        </View>
        <View className="ml-4 flex-1">
          <Text className="text-sm text-luma-text-medium">{title}</Text>
          <Text className="mt-1 text-lg font-semibold text-luma-text-dark">
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
}

function HighlightsSection() {
  return (
    <View className="mb-8">
      <Text className="mb-4 text-base font-semibold text-luma-text-dark">
        This Week
      </Text>
      <HighlightItem
        title="Most focused day"
        value="Friday"
        icon="🎯"
        color="bg-luma-accent-orange"
      />
      <HighlightItem
        title="Longest session"
        value="2h 15m"
        icon="⏱️"
        color="bg-luma-accent-purple"
      />
    </View>
  );
}

// Main Insights Screen Component
export default function InsightsScreen() {
  return (
    <ScrollView className="flex-1 bg-luma-bg px-6">
      {/* Header */}
      <View className="pt-10 pb-4">
        <Header />
      </View>

      {/* Summary Cards */}
      <View className="mb-8">
        <SummaryCard
          title="Total focus time"
          value="3h 45m"
          accentColor="bg-luma-accent-orange"
        />
        <SummaryCard
          title="Sessions completed"
          value="8"
          accentColor="bg-luma-accent-purple"
        />
      </View>

      {/* Weekly Chart */}
      <WeeklyChart />

      {/* Highlights Section */}
      <HighlightsSection />

      {/* Bottom padding */}
      <View className="pb-10" />
    </ScrollView>
  );
}
