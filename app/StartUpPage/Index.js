import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { useNavigation } from "@react-navigation/native";
const StartUpPage = () => {
  const Navigation = useNavigation();

  return (
    <View style={s`flex-1 `}>
      <View style={s`w-full h-3/5 items-center justify-end`}>
        <View style={s`flex-row`}>
          <View style={s`  items-center pr-2`}>
            {/**logo */}
            <Image
              source={require("../../assets/Frame.png")}
              style={s`w-20 h-20`}
            />
          </View>

          <View style={s`flex-row`}>
            <Text
              style={{ color: "#50924E", fontSize: 40, fontWeight: "bold" }}
            >
              Chat
            </Text>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>App</Text>
          </View>
        </View>
        {/**logo end */}

        {/**button and privacy policy, Terms and condition*/}
        <View style={s`w-9/12  pt-6`}>
          <Text style={{ textAlign: "center" }}>
            Chat and connect wth verified UAE singles seeking serious
            relationship
          </Text>
        </View>
      </View>

      <View style={s`w-full h-2/5  justify-center items-center`}>
        <TouchableOpacity
          onPress={() => {
          }}
          style={s`border w-11/12 items-center h-14 justify-center rounded-full border-gray-300 flex-row`}
        >
          <Text>Sign In With Phone Number</Text>
        </TouchableOpacity>

        <View style={s`w-9/12 pt-4`}>
          <Text style={{ textAlign: "center" }}>
            A single trusted digital identity for all citizens and residents
          </Text>
        </View>

        <View style={s`w-11/12 flex-row pt-6 items-center justify-center`}>
          <Text style={{ fontWeight: "200" }}>
            By signing in you agree to our{" "}
          </Text>
          <Pressable>
            <Text
              style={{
                textDecorationLine: "underline",
                textAlign: "center",
                fontWeight: "200",
              }}
            >
              Terms and conditions.
            </Text>
          </Pressable>
        </View>
        <View style={s`w-11/12 flex-row items-center justify-center`}>
          <Text style={{ fontWeight: "200" }}>use tour data in our</Text>
          <Pressable>
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "200" }}
            >
              Terms and conditions.
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StartUpPage;
