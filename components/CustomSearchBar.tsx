import { Ionicons } from "@expo/vector-icons";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Keyboard, TextInput, TouchableOpacity, View } from "react-native";

interface CustomSearchBarPropsType {
  filter?: Dispatch<SetStateAction<string | null>>;
  isActive: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
  placeholder?: string;
}

const CustomSearchBar: FC<CustomSearchBarPropsType> = ({
  isActive,
  setActive,
  filter,
  placeholder = "Search messages...",
}) => {
  const [input, setInput] = useState<string>("");

  const handleClear = () => {
    setInput("");
    if (filter) filter(null);
  };

  const handleBack = () => {
    if (!setActive) return;
    setActive(false);
    Keyboard.dismiss();
    setInput("");
    if (filter) filter(null);
  };

  return (
    <View className="px-4 py-2">
      <View
        className={`w-full rounded-full items-center px-4 py-3 gap-3 flex-row ${
          isActive
            ? "bg-orange-50 border-2 border-orange-500"
            : "bg-gray-100 border border-gray-200"
        }`}
      >
        {isActive ? (
          <TouchableOpacity
            onPress={handleBack}
            activeOpacity={0.7}
            className="w-6 h-6 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="#F97316" />
          </TouchableOpacity>
        ) : (
          <View className="w-6 h-6 items-center justify-center">
            <Ionicons name="search" size={20} color="#9CA3AF" />
          </View>
        )}

        <TextInput
          className="flex-1 text-gray-900 text-base"
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          cursorColor="#F97316"
          selectionColor="#FED7AA"
          onFocus={() => {
            if (setActive) setActive(true);
          }}
          value={input}
          onChangeText={(value) => {
            setInput(value);
            if (filter) filter(value || null);
          }}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />

        {input && input.length > 0 && (
          <TouchableOpacity
            onPress={handleClear}
            activeOpacity={0.7}
            className="w-6 h-6 items-center justify-center bg-gray-300 rounded-full"
          >
            <Ionicons name="close" size={16} color="#4B5563" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomSearchBar;
