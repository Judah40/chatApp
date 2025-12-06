import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";
import ChatProvider from "@/provider/chatContextModal";
import StreamProvider from "@/provider/streamChatProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <StreamProvider>
      <ChatProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#7c2d12",
            headerShown: false,
            tabBarButton: HapticTab,
            animation: "fade",
          }}
        >
          <Tabs.Screen
            name="Home"
            options={{
              title: "Chats",
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="home" size={28} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Calls"
            options={{
              title: "Calls",
              tabBarIcon: ({ color }) => (
                <Ionicons name="call-outline" size={28} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Updates"
            options={{
              title: "Updates",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="update" size={24} color={color} />
              ),
            }}
          />
        </Tabs>
      </ChatProvider>
    </StreamProvider>
  );
}
