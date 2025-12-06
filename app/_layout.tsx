import AuthContextProvider, { useAuth } from "@/useContext";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { OverlayProvider } from "stream-chat-expo";
import "../global.css";
const InitialLayout = () => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    console.log(isAuthenticated);
  }, []);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Protected guard={isAuthenticated!}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(extras)" />
      </Stack.Protected>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="index" />
        <Stack.Screen name="otp" />
      </Stack.Protected>
    </Stack>
  );
};
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OverlayProvider>
        <AuthContextProvider>
          <InitialLayout />;
        </AuthContextProvider>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
}
