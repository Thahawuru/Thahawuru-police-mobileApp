import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { useEffect, useState } from "react";
import { icons } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const formfield = ({ label, placeholder, styles, onChangeText,icon }) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  return (
    <>
      <View
        className={`border-[1px] my-1 border-slate-300 rounded-md p-2 w-full h-[70px] flex justify-center items-start ${styles?.container} `}
      >
        <View className="w-full h-12 px-4 bg-black-100 rounded-[50px] focus:border-secondary items-center flex-row">
          <TextInput
            className={` text-lg  h-full w-full m-0 p-0 transition-all duration-[2000ms] ${styles?.label}`}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            // onEndEditing={() => setFocused(false)}
            placeholderTextColor="slategray"
            onChangeText={onChangeText}
            secureTextEntry={label === "Password" && !showPassword}
          />
          {label === "Password" && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default formfield;
