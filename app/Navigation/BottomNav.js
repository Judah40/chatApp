import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Home/index';
import SettingsScreen from '../SettingsScreen/index';
import Status from '../Status/index';
import * as Icons from "react-native-heroicons/solid"
const BottomNav = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
 <Tab.Navigator
 
 >

      {/**Status */}
      <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icons.CameraIcon  />
        ),
      tabBarLabel:"Status"
      }}
      name="Status" component={Status} />

      {/**Chats */}
      <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icons.ChatBubbleLeftIcon  />
        ),
        tabBarLabel:"Chats"

      }}
      name="Home" component={HomeScreen} />
      
      {/**Settings */}
      <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icons.CogIcon  />
        ),
        tabBarLabel:"Settings"

      }}
      name="Settings" component={SettingsScreen} />
    </Tab.Navigator>   
  )
}

export default BottomNav