import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Zocial from "@expo/vector-icons/Zocial";
import React from "react";
import { StyleSheet, Text } from "react-native";
const ICON_LIBRARIES: Record<string, any> = {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Entypo,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  EvilIcons,
  Zocial,
  Foundation,
  Fontisto,
};

interface Prop {
  type: keyof typeof ICON_LIBRARIES;
  name: string;
  color?: string;
  size?: number;
  style?: any;
}

const IconType = {};
const CIcon = ({ type, name, color, size = 20, style }: Prop) => {
  const IconLibary = ICON_LIBRARIES[type];

  if (!IconLibary) {
    return (
      <Text
        style={{
          fontSize: 20,
          color: "red",
          fontWeight: "500",
        }}
      >
        !
      </Text>
    );
  }

  return (
    <IconLibary
      name={name}
      size={size}
      color={color || "black"}
      style={style}
    />
  );
};

export default CIcon;

const styles = StyleSheet.create({});
