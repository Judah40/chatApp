import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUpPage from "../StartUpPage/Index"
import NumberPage from "../NumberPage/Index"
import BottomNav from "../Navigation/BottomNav"
import Verification from "../Verification/Verification"
import PhoneBook from '../components/PhoneBook';

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='TabNav'
    screenOptions={{
        headerShown: false,
       }}
    >
        <Stack.Screen name='StartUp' component={StartUpPage}/>
        <Stack.Screen name='NumberInput' component={NumberPage}/>
        <Stack.Screen name='TabNav' component={BottomNav}/>
        <Stack.Screen name='Verification' component={Verification}/>
        <Stack.Screen name='Phone' component={PhoneBook}/>
    </Stack.Navigator>
  )
}

export default MainNavigation