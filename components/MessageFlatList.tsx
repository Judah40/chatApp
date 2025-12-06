import { formatTime } from "@/utils/formatter";
import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

interface userList {
  id: string;
  firstName: string;
  lastName?: string;
  profilePictureUrl: string;
  messagePreview: string;
  messageSeen: boolean;
  time: Date;
  unreadCount?: number;
}

interface MessageFlatListPropTypes {
  data: userList[];
}

interface renderPropTypes {
  items: userList;
}

const RenderItem: FC<renderPropTypes> = ({ items }) => {
  return (
    <TouchableOpacity
      className="px-4 py-3 w-full flex-row items-center border-b border-gray-100 active:bg-gray-50"
      activeOpacity={0.7}
    >
      {/* Profile Picture with Online Status */}
      <View className="relative mr-3">
        <Image
          source={{ uri: items.profilePictureUrl }}
          className="w-16 h-16 rounded-full bg-gray-200"
        />
        {items.unreadCount && items.unreadCount > 0 && (
          <View className="absolute -top-1 -right-1 bg-orange-500 rounded-full w-5 h-5 items-center justify-center border-2 border-white">
            <Text className="text-white text-xs font-bold">
              {items.unreadCount > 9 ? "9+" : items.unreadCount}
            </Text>
          </View>
        )}
      </View>

      {/* Message Content */}
      <View className="flex-1 mr-2">
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-gray-900 font-semibold text-base">
            {items.firstName} {items.lastName || ""}
          </Text>
          <Text className="text-gray-400 text-xs">
            {formatTime(items.time)}
          </Text>
        </View>

        <View className="flex-row items-center">
          {items.messageSeen !== undefined && (
            <Ionicons
              name={items.messageSeen ? "checkmark" : "checkmark-done"}
              size={14}
              color={items.messageSeen ? "#9CA3AF" : "#F97316"}
              style={{ marginRight: 4 }}
            />
          )}
          <Text
            className={`flex-1 ${items.unreadCount && items.unreadCount > 0 ? "text-gray-900 font-medium" : "text-gray-500"}`}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {items.messagePreview}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MessageFlatList: FC<MessageFlatListPropTypes> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderItem items={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 16 }}
      ItemSeparatorComponent={null}
    />
  );
};

export default MessageFlatList;
