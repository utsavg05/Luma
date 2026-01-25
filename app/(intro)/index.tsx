// import React from "react";
// import { View, Text, Pressable } from "react-native";

// // Decorative Circle Component
// interface DecorativeCircleProps {
//   size: number;
//   color: string;
//   position: string;
// }

// function DecorativeCircle({ size, color, position }: DecorativeCircleProps) {
//   return (
//     <View
//       className={`absolute rounded-full ${color} ${position}`}
//       style={{ width: size, height: size, opacity: 0.4 }}
//     />
//   );
// }

// // Logo/Brand Mark Component
// function BrandMark() {
//   return (
//     <View className="items-center justify-center">
//       {/* Main circle - Luma gradient representation */}
//       <View className="relative h-32 w-32 items-center justify-center">
//         {/* Outer circle with gradient-like layering */}
//         <View className="absolute h-32 w-32 rounded-full border-4 border-luma-accent-orange opacity-30" />

//         {/* Inner circles for depth */}
//         <View className="absolute h-24 w-24 rounded-full border-3 border-luma-accent-purple opacity-40" />

//         {/* Center accent */}
//         <View className="h-8 w-8 rounded-full bg-luma-accent-blue" />
//       </View>
//     </View>
//   );
// }

// // Center Content Component
// function CenterContent() {
//   return (
//     <View className="flex-1 items-center justify-center px-6">
//       {/* App Name */}
//       <Text className="text-7xl font-bold text-luma-text-dark">Luma</Text>

//       {/* Brand Mark */}
//       <View className="my-8">
//         <BrandMark />
//       </View>

//       {/* Tagline */}
//       <Text className="text-center text-xl text-luma-text-medium">
//         Find your focus. Gently.
//       </Text>
//     </View>
//   );
// }

// // CTA Button Component
// interface CTAButtonProps {
//   onPress: () => void;
// }

// function CTAButton({ onPress }: CTAButtonProps) {
//   return (
//     <Pressable
//       onPress={onPress}
//       className="rounded-full bg-luma-accent-orange px-12 py-4"
//     >
//       <Text className="text-center text-lg font-semibold text-white">
//         Start your journey
//       </Text>
//     </Pressable>
//   );
// }

// // Main Intro Screen Component
// export default function IntroScreen() {
//   const handleStartJourney = () => {
//     // Placeholder for navigation
//     console.log("Navigate to home screen");
//   };

//   return (
//     <View className="flex-1 bg-luma-bg">
//       {/* Decorative elements - floating shapes */}
//       <DecorativeCircle
//         size={120}
//         color="bg-luma-accent-orange"
//         position="top-20 -left-10"
//       />
//       <DecorativeCircle
//         size={80}
//         color="bg-luma-accent-purple"
//         position="top-40 right-0"
//       />
//       <DecorativeCircle
//         size={100}
//         color="bg-luma-accent-blue"
//         position="bottom-32 -right-16"
//       />
//       <DecorativeCircle
//         size={60}
//         color="bg-luma-accent-orange"
//         position="bottom-20 left-10"
//       />

//       {/* Center Content */}
//       <CenterContent />

//       {/* Bottom CTA Section */}
//       <View className="items-center px-6 pb-12">
//         <CTAButton onPress={handleStartJourney} />
//       </View>
//     </View>
//   );
// }


import { View, Text } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}