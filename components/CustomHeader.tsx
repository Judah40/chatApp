import React, { FC, ReactNode } from "react";
import { Text, View } from "react-native";

interface CustomHeaderPropsType {
  title: string;
  children?: ReactNode;
}
const CustomHeader: FC<CustomHeaderPropsType> = ({ title, children }) => {
  return (
    <View className="p-6 flex-row">
      <Text className="text-orange-900 text-3xl font-bold">{title}</Text>

      <View className="flex-1 gap-2  flex-row justify-end items-center">
        {children}
      </View>
    </View>
  );
};

export default CustomHeader;
