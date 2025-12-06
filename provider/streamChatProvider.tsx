import { getUserProfile } from "@/api/profile";
import ChatSkeletonLoader from "@/components/ChatSkeletonLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StreamVideoClient } from "@stream-io/video-client";
import { createContext, useContext, useEffect, useState } from "react";
import { StreamChat, User } from "stream-chat";
import { Chat } from "stream-chat-expo";
interface streamContextType {
  videoClient: StreamVideoClient | null;
  chatClient: StreamChat | null;
}
const streamContext = createContext<streamContextType | null>(null);
const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY!;
const StreamProvider = ({ children }: { children: any }) => {
  const [chatClient, setchatClient] = useState<StreamChat | null>(null);
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(
    null
  );
  const clientsSetup = async () => {
    try {
      const existingUser = chatClient?.user; // or check some flag
      if (existingUser) return; // already connected
      const userProfile = await getUserProfile();
      const token = await AsyncStorage.getItem("streamToken");
      const {
        id: userId,
        firstName,
        lastName,
        profilePicture,
      } = userProfile.data.data.User;
      console.log(userProfile.data.data.User);
      const user: User = {
        id: userId.toString(),
        name: `${firstName} ${lastName}`,
        image: profilePicture,
      };

      const ChatClient = StreamChat.getInstance(apiKey);
      ChatClient.connectUser(user, token);
      setchatClient(ChatClient);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!chatClient) {
      clientsSetup();
    }
    return () => {
      if (chatClient) chatClient.disconnectUser();
    };
  }, []);

  if (!chatClient) {
    return <ChatSkeletonLoader />;
  }
  return (
    <streamContext.Provider
      value={{
        chatClient,
        videoClient,
      }}
    >
      <Chat client={chatClient}>{children}</Chat>
    </streamContext.Provider>
  );
};

export default StreamProvider;
export const useStreamAuth = () => {
  const context = useContext(streamContext);
  if (context === undefined) {
    console.error("Stream Context should be wrapped around your app");
  }
  return context;
};
