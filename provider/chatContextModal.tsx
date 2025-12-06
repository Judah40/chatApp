import ChatHeader from "@/components/ChatHeader";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Channel as ChannelType } from "stream-chat";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";

interface chatContextPropsType {
  setChannel: Dispatch<SetStateAction<ChannelType | null>>;
}
interface chatProviderPropType {
  children: any;
}
const chatContext = createContext<chatContextPropsType | null>(null);

const ChatProvider: FC<chatProviderPropType> = ({ children }) => {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  return (
    <chatContext.Provider
      value={{
        setChannel,
      }}
    >
      <Modal visible={channel != null} animationType="slide">
        <SafeAreaView>
          <Channel channel={channel!}>
            <ChatHeader closeChat={setChannel} />
            <MessageList />
            <MessageInput />
          </Channel>
        </SafeAreaView>
      </Modal>
      {children}
    </chatContext.Provider>
  );
};

export default ChatProvider;

export const useChatContext = () => {
  const context = useContext(chatContext);
  if (context === null) {
    // Check for null instead of undefined
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
