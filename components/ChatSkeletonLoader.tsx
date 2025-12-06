import React, { FC, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ChatSkeletonLoaderProps {
  count?: number;
}

const SkeletonItem: FC = () => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [shimmerAnimation]);

  const opacity = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View className="flex-row items-center p-4 bg-white">
      {/* Profile Picture Skeleton */}
      <Animated.View
        style={{ opacity }}
        className="w-12 h-12 rounded-full bg-gray-300"
      />

      {/* Content Skeleton */}
      <View className="flex-1 ml-3">
        {/* Name and Time Row */}
        <View className="flex-row justify-between items-center mb-2">
          <Animated.View
            style={{ opacity }}
            className="h-4 w-32 bg-gray-300 rounded"
          />
          <Animated.View
            style={{ opacity }}
            className="h-3 w-12 bg-gray-300 rounded"
          />
        </View>

        {/* Message Preview Skeleton */}
        <View className="flex-row justify-between items-center">
          <Animated.View
            style={{ opacity }}
            className="h-3 w-3/4 bg-gray-300 rounded"
          />
        </View>
      </View>
    </View>
  );
};

const ChatSkeletonLoader: FC<ChatSkeletonLoaderProps> = ({ count = 8 }) => {
  return (
    <SafeAreaView className="flex-1">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={`skeleton-${index}`} />
      ))}
    </SafeAreaView>
  );
};

export default ChatSkeletonLoader;
