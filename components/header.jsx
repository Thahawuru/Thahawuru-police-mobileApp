import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tahauru from "../assets/images/tahauru-key.png";
import logo from "../assets/images/tahauru-logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const header = ({ back }) => {
  const navigation = useNavigation();

  const goback = () => {
    navigation.goBack();
  };

  return (
    <View className="bg-[#fff] relative w-full flex flex-row justify-center items-start h-28 border-b-[1px] border-slate-200">
      {back && 
            <View className="flex absolute left-0 w-full flex-row justify-start items-center p-6 gap-2">
            <TouchableOpacity onPress={goback}>
              <MaterialIcons name="arrow-back" size={26} color="gray" />
            </TouchableOpacity>
          </View>
      }

      <View className=" flex flex-row justify-center items-center p-4">
        <Image
          resizeMode={"contain"}
          source={tahauru}
          className="h-12 w-12"
        ></Image>
        <Image resizeMode={"contain"} source={logo} className="h-5 w-5"></Image>
      </View>
      <View className="flex absolute right-0 w-full flex-row justify-end items-center p-6 gap-2">
        {/* <MaterialIcons name="notifications" size={22} color="gray" /> */}
        <MaterialIcons name="menu" size={26} color="gray" />
      </View>
    </View>
  );
};

export default header;
