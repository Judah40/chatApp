import CustomHeader from "@/components/CustomHeader";
import CustomSearchBar from "@/components/CustomSearchBar";
import FloatingButton from "@/components/FloatingButton";
import { useChatContext } from "@/provider/chatContextModal";
import { FontAwesome6 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChannelList } from "stream-chat-expo";
const Home = () => {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);
  const handleFloatingButtonClick = async () => {
    console.log("hi");
    // await AsyncStorage.clear();
    router.push("/");
  };

  const { setChannel } = useChatContext();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FloatingButton onPress={handleFloatingButtonClick}>
        <FontAwesome6 name="add" size={20} color="white" />
      </FloatingButton>
      {!isSearchActive && (
        <CustomHeader title="Chats">
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="#7c2d12" />
          </TouchableOpacity>
        </CustomHeader>
      )}
      <CustomSearchBar isActive={isSearchActive} setActive={setSearchActive} />
      <View className="py-2 px-4 flex-1">
        {/* <MessageFlatList data={DummyUsers} /> */}

        <ChannelList
          onSelect={(channel) => setChannel(channel)}
          EmptyStateIndicator={() => {
            return (
              <View className="flex-1 items-center justify-center">
                <Text> No Chat</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
