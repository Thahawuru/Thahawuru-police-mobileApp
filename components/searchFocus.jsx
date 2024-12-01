import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { router } from "expo-router";
import { icons } from "../constants";

const SearchFocus = ({ route, label, styles, icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePress = () => {
    router.push(route);
  };

  return (
    <View
      className={`border-[1px] my-1 border-slate-300 rounded-md p-2 w-full h-[70px] flex justify-center items-start ${styles?.container}`}
    >
      <View className="w-full h-12 px-4 bg-black-100 rounded-[50px] items-center flex-row">
        <TouchableOpacity
          onPress={handlePress}
          className="flex-row items-center w-full h-full"
        >
          <Text className={`text-lg flex-grow text-slate-600 ${styles?.label}`}>
            {label}
          </Text>
          {label === "Password" && (
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="ml-2"
            >
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchFocus;
