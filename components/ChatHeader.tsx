import { Ionicons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { Dispatch, FC, SetStateAction } from "react";
import { TouchableOpacity, View } from "react-native";
import { Channel } from "stream-chat";
interface chatPropTypes {
  closeChat: Dispatch<SetStateAction<Channel | null>>;
}
const ChatHeader: FC<chatPropTypes> = ({ closeChat }) => {
  return (
    <View className="p-6 flex-row justify-between border-b items-center">
      <View className="flex-row items-center gap-2">
        <TouchableOpacity
          onPress={() => {
            closeChat(null);
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#7c2d12" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="user" size={40} color="#7c2d12" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Ionicons name="call-outline" size={28} color="#7c2d12" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;
