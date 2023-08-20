import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { s } from "react-native-wind";

const PhoneBook = () => {
  // states
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Name,
            Contacts.Fields.Emails,
            Contacts.Fields.PhoneNumbers,
          ],
        });

        if (data.length > 0) {
          const contact = data.sort((a, b) => a.name.localeCompare(b.name));
          setContacts(contact);
        }
      }
    })();
  }, []);
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={s`flex-row items-center  p-4 `}>
          {/* Pic */}
          <View>
            <View style={s`w-14 h-14 bg-gray-200 rounded-full`}></View>
          </View>

          {/* Contact */}
          <View style={s `ml-2 flex-1`}>
            {/* Name */}
            <View>
            <Text>{item.name}</Text>

            </View>

            {/* Number */}
            <View style={s `mt-2`}>
            <Text> {item.phoneNumbers[0].number}</Text>

            </View>
          <View style={s`w-full h-2 items-end pt-2`}>
          <View
                style={{ width: "100%", borderWidth: 0.3, borderColor: "gray" }}
              ></View>
          </View>
          </View>

        </TouchableOpacity>
      )}
    />
  );
};

export default PhoneBook;
