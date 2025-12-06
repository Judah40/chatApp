import OTPInput from "@/components/otpInput";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { handleOTPVerification } from "../api/auth";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);

  const { otp: Otp } = useLocalSearchParams();
  // You can replace this with your actual phone/email
  const maskedContact = "+233 *** *** **34";

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      return;
    }

    setIsLoading(true);
    try {
      // Your OTP verification API call here
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await handleOTPVerification(otp);
      console.log(response.data);
      await AsyncStorage.setItem("token", response.data.data.token.userToken);
      await AsyncStorage.setItem(
        "streamToken",
        response.data.data.token.streamToken
      );
      router.replace("/(extras)/ProfileDetailsSetup");
      // Navigate to next screen on success
      // router.push('/home');
    } catch (error) {
      console.error("OTP verification failed:", error);
      // console.log(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      // Your resend OTP API call here
      setTimer(60);
      // Start countdown timer
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {/* Header with Back Button */}
      <View className="px-5 pt-2">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-6">
        {/* Logo Section */}
        <View className="items-center pb-12 pt-8">
          {/* Replace with your actual logo */}
          <View className="h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
            <Ionicons name="shield-checkmark" size={48} color="black" />
          </View>
        </View>

        {/* Content Section */}
        <View className="flex-1">
          {/* Title */}
          <Text className="mb-3 text-center text-3xl font-bold">
            OTP Verification
          </Text>

          {/* Subtitle */}
          {/* <Text className="mb-2 px-4 text-center text-gray-400">
            We've sent a 6-digit verification code to
          </Text> */}
          <Text className="mb-2 px-4 text-center text-gray-600">
            Due to lack of a proper verficication service. you can use the otp
            below to verify yourself, Thank you for your understading
          </Text>

          {/* Masked Contact */}
          <Text className="mb-8 text-center font-semibold text-black">
            {Otp}
          </Text>

          {/* OTP Input */}
          <View className="mb-8">
            <OTPInput
              length={6}
              onComplete={(otpValue) => {
                setOtp(otpValue);
              }}
              onChangeOTP={(otpValue) => {
                setOtp(otpValue);
              }}
            />
          </View>

          {/* Verify Button */}
          <View className="mb-6">
            <TouchableOpacity
              disabled={otp.length !== 6 || isLoading}
              className="w-full p-4 rounded-full items-center justify-center bg-orange-900"
              onPress={() => handleVerifyOTP()}
            >
              <Text className="text-white">
                {isLoading ? "Please wait" : "Verify"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Resend Section */}
          <View className="items-center">
            <Text className="mb-2 text-gray-600">
              Didn&apos;t receive the code?
            </Text>
            <Text className="mb-2 text-gray-600">Well You are Lying</Text>

            {/* {timer > 0 ? (
              <Text className="text-gray-500">
                Resend code in <Text className="font-semibold text-blue-500">{timer}s</Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResendOTP}>
                <Text className="text-base font-semibold text-blue-500">Resend Code</Text>
              </TouchableOpacity>
            )} */}
          </View>
        </View>

        {/* Footer Help Text */}
        <View className="pb-8">
          <Text className="text-center text-sm text-gray-500">
            Enter the 6-digit code sent to your phone
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;
