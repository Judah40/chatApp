import CustomHeader from "@/components/CustomHeader";
import FloatingButton from "@/components/FloatingButton";
import Status from "@/components/Status";
import StatusHeader from "@/components/StatusHeader";
import { statuses } from "@/Types/updatesType";
import { Entypo, Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Update = () => {
  const handleFloatingButtonClick = async () => {};

  return (
    <SafeAreaView className="flex-1">
      <FloatingButton onPress={handleFloatingButtonClick}>
        <MaterialCommunityIcons name="camera-plus" size={20} color="white" />
      </FloatingButton>
      <ScrollView>
        <CustomHeader title="Updates">
          <TouchableOpacity>
            <Ionicons name="search" size={20} color="#7c2d12" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="#7c2d12" />
          </TouchableOpacity>
        </CustomHeader>

        <StatusHeader />
        <Status status={statuses} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Update;
