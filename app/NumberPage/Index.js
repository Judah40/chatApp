import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { s } from "react-native-wind";
import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";

const NumberPage = () => {
const navigation = useNavigation()
useLayoutEffect(()=>{
navigation.setOptions({
  headershown: true
})
})

const [value, setValue] = useState('')


  return (
    <KeyboardAvoidingView
    style={s `flex-1 bg-white`}
    >

    <View style={s `flex-1 bg-white`}>
      <View style={s `w-full h-20  items-center justify-center`}>
      <Text style={{fontSize:20, fontWeight:"bold", color:"#50924E"}}>Enter Your Phone Number</Text>
      </View>
      
      <View style={s `w-full h-24 items-center `}>
        <View style={s `w-9/12`}>
        <Text style={{textAlign:"center", fontSize:16}}>
          ChatApp will send an SMS message(carrier charges may apply) to verify your phone number. Enter your country code and phone number.
        </Text>
        </View>
      </View>

      <View style={s `w-full items-center `}>
     <PhoneInput
     onChangeText={(number)=>{
      setValue(number)
    }}
    defaultCode='SL'
    textInputStyle={{backgroundColor:"white"}}
    textContainerStyle={{backgroundColor:"white", borderBottomWidth:2, borderBottomColor:"#50924E"}}
    countryPickerButtonStyle={{ borderBottomWidth:2, borderBottomColor:"#50924E"}}
/>
      </View>



      <View style={s `w-full  items-center h-60 justify-end`}>
      <TouchableOpacity style={{width:100, height:40, backgroundColor:"#50924E", alignItems:"center", justifyContent:"center", borderRadius: 4, }}>
        <Text style={{color:"white", fontWeight:"400"}}>NEXT</Text>
      </TouchableOpacity>

      <View style={s `w-11/12 pt-4`}>
        <Text style={{textAlign:"center"}}>You must be at least 16 years to register. Learn how chat works</Text>
      </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default NumberPage