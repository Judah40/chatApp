import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const Status = () => {
  return (
    <View style={s` flex-1 bg-white items-center`}>

      {/* Header */}
      <View style={s`w-11/12 h-8`}>
        <TouchableOpacity>
          <Text style={s`text-blue-500`}>Privacy</Text>



        </TouchableOpacity>
      </View>

      <View style={s`w-11/12  pb-2`}>
        <Text style={s`text-2xl font-bold`}>Settings</Text>
      </View>


      <View class={"bg-red-500 w-full h-40"}>

      </View>
    </View>
  );
};

export default Status;
