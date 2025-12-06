import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loader = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator color={"orange"} />
    </View>
  );
};

export default Loader;
