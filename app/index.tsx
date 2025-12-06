import { useAuth } from "@/useContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
const phoneRegExp = /^\+?\d{7,15}$/; // allow optional +, 7–15 digits (adjust as needed)

const Login = () => {
  const { authenticate, isLoading } = useAuth();
  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required("Phone number is required"),
      })}
      onSubmit={async (values) => {
        console.log("Submitted phone:", values.phone);
        if (!authenticate) return;
        await authenticate(values.phone);
        // proceed with login logic...
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        // <KeyboardAvoidingView
        //   behavior={Platform.OS === "ios" ? "padding" : "height"}
        //   style={{ flex: 1 }}
        // >
        <View className="flex-1 items-center justify-center bg-white gap-4">
          <View className=" w-20 h-20 rounded-full bg-orange-900 items-center justify-center">
            <Ionicons name="chatbubble" size={30} color="white" />
          </View>
          <Text>Please Enter your Phone Number</Text>
          <TextInput
            className="w-11/12 h-12 rounded-lg border-orange-500 border"
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            value={values.phone}
            keyboardType="phone-pad"
            placeholder="Please Enter Phone Number"
          />
          {touched.phone && errors.phone ? (
            <Text style={{ color: "red", marginTop: 4 }}>{errors.phone}</Text>
          ) : null}
          <TouchableOpacity
            className="w-11/12 p-4 rounded-full items-center justify-center bg-orange-900"
            disabled={isLoading}
            onPress={() => handleSubmit()}
          >
            <Text className="text-white">
              {isLoading ? "Please wait..." : "Submit"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.push("/otp");
            }}
          >
            <Text>Go To</Text>
          </TouchableOpacity>
        </View>
        // </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default Login;
