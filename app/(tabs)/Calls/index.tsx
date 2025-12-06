import CustomHeader from "@/components/CustomHeader";
import FloatingButton from "@/components/FloatingButton";
import { Entypo, Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const index = () => {
  const handleFloatingButtonClick = async () => {};

  return (
    <SafeAreaView className="flex-1">
      <FloatingButton onPress={handleFloatingButtonClick}>
        <MaterialIcons name="add-ic-call" size={24} color="white" />
      </FloatingButton>
      <CustomHeader title="Calls">
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#7c2d12" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="#7c2d12" />
        </TouchableOpacity>
      </CustomHeader>
    </SafeAreaView>
  );
};

export default index;
