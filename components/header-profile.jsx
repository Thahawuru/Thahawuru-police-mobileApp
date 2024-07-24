import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const header = ({ title, back }) => {
  const navigation = useNavigation();
  const goback = () => {
    navigation.goBack();
  };
  return (
    <View className="bg-[#fff] relative w-screen flex flex-row justify-start items-start h-20 border-b-[1px] border-slate-200 ">
      {back && (
        <>
          <View className="flex absolute left-0 w-full flex-row justify-start items-center p-6 gap-2">
            <TouchableOpacity onPress={goback}>
              <MaterialIcons name="arrow-back" size={26} color="gray" />
            </TouchableOpacity>
          </View>
          <View className=" flex flex-row w-full justify-center items-center p-6">
            <Text className="text-lg text-slate-500 font-semibold">
              {title}
            </Text>
          </View>
        </>
      )}

      {!back && (
        <View className=" flex flex-row justify-start items-center p-6">
          <Text className="text-lg text-slate-500 font-semibold">{title}</Text>
        </View>
      )}
      <View className="flex absolute right-0 w-full flex-row justify-end items-center p-6 gap-2">
        <TouchableOpacity onPress={() => navigation.navigate("(settings)")}>
          <MaterialIcons name="menu" size={26} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default header;
