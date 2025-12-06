import { FontAwesome6 } from "@expo/vector-icons";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface StatusHeaderPropType {
  profilePictureUrl?: string;
  statusAdded?: string[];
}
const StatusHeader: FC<StatusHeaderPropType> = ({
  profilePictureUrl,
  statusAdded,
}) => {
  return (
    <View className="px-6 gap-2">
      <Text className="text-orange-900 text-2xl font-semibold">Status</Text>
      <TouchableOpacity className="flex-row gap-3">
        <View className="relative w-16 h-16 rounded-full">
          <View className="w-6 h-6 bottom-0 border border-white right-2 absolute items-center justify-center rounded-full bg-orange-900 z-50">
            <FontAwesome6 name="add" size={10} color="white" />
          </View>
          <Image
            source={{ uri: profilePictureUrl }}
            className="w-16 h-16 z-10 rounded-full bg-gray-200"
          />
        </View>

        <View className="ml-3">
          <Text className="text-lg font-bold text-orange-900">Add status</Text>
          <Text className="text-gray-500 font-semibold">
            Disappears after 24 hours
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StatusHeader;
