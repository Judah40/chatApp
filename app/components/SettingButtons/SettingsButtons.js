import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from "react-native-wind";
import * as Icons from "react-native-heroicons/solid";
const SettingsButtons = ({name,iconName, sideIcon, color}) => {
  return (
    <TouchableOpacity style={s`w-11/12 h-12  flex-row `}>
    {/* Icon */}
    <View
      style={s`w-10 h-10 items-center justify-center ${color}  rounded`}
    >
        {sideIcon}
    </View>
    <View style={s `flex-1 items-center`}>
      <View style={s`flex-row h-full pb-2 flex-1 pl-2 items-center`}>
        <Text style={s `text-sm `}>{name}</Text>
        <View style={s`flex-1 items-end `}>
            {iconName}
        </View>

      </View>
       
    </View>
  </TouchableOpacity>
  )
}

export default SettingsButtons