import React, { FC, ReactNode } from "react";
import { TouchableOpacity } from "react-native";
interface FloatingButtonPropsType {
  children: ReactNode;
  onPress: () => void;
}
const FloatingButton: FC<FloatingButtonPropsType> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute rounded-xl w-14 h-14 bg-orange-900 bottom-10 right-5 items-center justify-center z-50"
    >
      {children}
    </TouchableOpacity>
  );
};

export default FloatingButton;
