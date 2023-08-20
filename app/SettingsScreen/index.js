import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import * as Icons from "react-native-heroicons/solid";
import SettingsButtons from "../components/SettingButtons/SettingsButtons";

const SettingsScreen = () => {
  const title = "Hello. Im using Whatsapp Business";
  const MaxLength = 24;
  const cutTitle =
    title.length > MaxLength ? title.substring(0, MaxLength) + "..." : title;
  return (
    <View style={s`flex-1 bg-white items-center`}>
      {/**Header */}

      <View style={s`w-full items-center`}>
        <View style={s`w-11/12  pb-2`}>
          <Text style={s`text-2xl font-bold`}>Settings</Text>
        </View>

        {/* Search bar */}

        <View
          style={s`w-11/12 flex-row h-12 bg-gray-200 rounded-xl pl-4 items-center`}
        >
          <Icons.MagnifyingGlassIcon />
          <TextInput
            placeholder="Search name or number"
            style={s`w-full pl-2`}
          />
        </View>
      </View>

      {/* Profile Picture, Number, Name, About */}
      <TouchableOpacity
        onPress={() => {
          console.log("hello");
        }}
        style={s`w-full h-28 justify-center items-center pt-2`}
      >
        <View
          style={s`w-11/12 bg-gray-200 rounded-xl h-full flex-row items-center pl-4`}
        >
          <View style={s``}></View>
          {/* pp */}
          <View style={s`w-16 h-16 bg-gray-300 rounded-full`}></View>
          {/* Name and about */}
          <View style={s` pl-4`}>
            <Text style={s`text-base font-bold`}>JAD</Text>
            <Text style={s`text-sm`}>{`${cutTitle}`}</Text>
          </View>

          {/* Scanner */}

          <View style={s`   flex-1 items-center`}>
            <TouchableOpacity
              onPress={() => {
                console.log("hi");
              }}
              style={s`bg-gray-300 rounded-full h-8 w-8 items-center justify-center  `}
            >
              <Icons.QrCodeIcon />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* Account Setting  */}
      <View style={s`w-full items-center mt-4 h-80 `}>
        <View style={s`w-11/12 h-full items-center bg-gray-200 rounded-xl p-4`}>
          {/* Account Setting */}
          <SettingsButtons
            iconName={<Icons.ChevronRightIcon color={"gray"} />}
            sideIcon={<Icons.KeyIcon color={"white"} />}
            color={"bg-blue-500"}
            name={"Account"}
          />
          <View style={s`w-full items-end mb-7`}>
            <View
              style={{ width: "80%", borderWidth: 0.3, borderColor: "gray" }}
            ></View>
          </View>
          {/* Privacy */}

          <SettingsButtons
            iconName={<Icons.ChevronRightIcon color={"gray"} />}
            sideIcon={<Icons.LockClosedIcon color={"white"} />}
            color={"bg-blue-300"}
            name={"Privacy"}
          />

          <View style={s`w-full items-end mb-7`}>
            <View
              style={{ width: "80%", borderWidth: 0.3, borderColor: "gray" }}
            ></View>
          </View>
          {/* Chats */}

          <SettingsButtons
            iconName={<Icons.ChevronRightIcon color={"gray"} />}
            sideIcon={<Icons.ChatBubbleLeftIcon color={"white"} />}
            color={"bg-green-500"}
            name={"Chat"}
          />

          <View style={s`w-full items-end mb-7`}>
            <View
              style={{ width: "80%", borderWidth: 0.5, borderColor: "gray" }}
            ></View>
          </View>
          {/* Notifications */}
          <SettingsButtons
            iconName={<Icons.ChevronRightIcon color={"gray"} />}
            sideIcon={<Icons.BellIcon color={"white"} />}
            color={"bg-red-500"}
            name={"Notification"}
          />

          {/* Storage */}
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
