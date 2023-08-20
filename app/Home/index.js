import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import * as Icons from "react-native-heroicons/solid";
import PhoneBook from "../components/PhoneBook";
const HomeScreen = () => {

  // STATES

  const [contacts, setContacts]  = useState(false)
  return (
    <View style={s`flex-1 bg-white`}>
      {/**Header */}
      <View style={s`h-20 w-full items-center justify-end`}>
        <View style={s`w-11/12 `}>
          <View style={s`w-full flex-row items-center`}>
            <Text style={s`text-4xl font-bold`}>Chat</Text>
            <View style={s`flex-1 items-end`}>
              <TouchableOpacity
              onPress={()=>{
                setContacts(true);
              }}
              style={s`border rounded border-blue-500`}>
                <Icons.PhoneIcon size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ width: "100%", borderWidth: 0.3, borderColor: "gray" }}
          ></View>
        </View>
      </View>

      {/* Modals */}

      {/* Modal1 */}
      <Modal
      animationType="slide"
      visible={contacts}
      presentationStyle="formSheet"
      onRequestClose={()=>{
          setContacts(false);
      }}
      >
        <View style={s `pt-12 w-full flex-1 items-center`}>

          <Text style={s `text-lg font-bold`}>
            New Chat
          </Text>
          {/* Search */}
          <View style={s `w-11/12 flex-row h-12 bg-gray-200 rounded-xl pl-4 items-center`}>
            <Icons.MagnifyingGlassIcon/>
      <TextInput
      placeholder="Search name or number"
      style={s `w-full pl-2`}
      />
          </View>

<View style={s `w-full`}>

          <PhoneBook/>
</View>
        </View>
      </Modal>

      <ScrollView style={s`flex-1 mt-4`}>
        {/* chat */}
        <View style={s`h-screen flex-1 w-full items-center`}>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
          {/* chat 1 */}
          <TouchableOpacity style={s`w-11/12 h-16 mb-6`}>
            <View style={s`flex-row items-center`}>
              {/* pic */}
              <View style={s`w-16 h-16 rounded-full bg-gray-100`}></View>
              {/* Chat */}

              <View style={s`ml-2`}>
                {/* Name */}
                <View style={s``}>
                  <Text style={s`font-bold text-base`}>Judah</Text>
                </View>
                {/* Chat */}
                <View style={s`mt-1`}>
                  <Text>chat with me</Text>
                </View>
              </View>
              {/* Time */}

              <View style={s` flex-1 items-end`}>
                <Text>12:50 AM</Text>
                <View
                  style={s`w-6 h-6 bg-blue-500 rounded-full items-center justify-center`}
                >
                  <Text style={s` `}>5</Text>
                </View>
              </View>
            </View>
            <View style={s`w-full h-2 items-end pt-2`}>
              <View
                style={{ width: "82%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
