import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {s} from 'react-native-wind'
const Verification = () => {
    const [code, setCode] = useState([',','',''])

  return (
    <KeyboardAvoidingView
    style={s `flex-1 bg-white`}
    >

    <View style={s `flex-1 bg-white`}>
      <View style={s `w-full h-20  items-center justify-center`}>
      <Text style={{fontSize:20, fontWeight:"bold", color:"#50924E"}}>Verify Your Phone Number</Text>
      </View>
      
     <View style={s `w-full h-12  items-center justify-center`}>
    <Text style={s `text-lg`}>Waiting to automatically detect sms sent to</Text>
    <View style={s `flex-row`}>
    <Text style={s `text-lg`}>+23231851053.</Text>
    <TouchableOpacity>
    <Text style={s `text-lg text-blue-400`}>Wrong Number?</Text>
    </TouchableOpacity>
    </View>
     </View>

     <View>
    


       </View>
     </View>

    </KeyboardAvoidingView>
  )
}

export default Verification