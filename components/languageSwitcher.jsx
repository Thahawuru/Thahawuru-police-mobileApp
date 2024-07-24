// LanguageSwitcher.js
import { useEffect, useState } from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import i18n from "../i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { use } from "i18next";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("");

  const getLanguage = async () => {
    const savedLanguage = (await AsyncStorage.getItem("language")) || "en";
    setLanguage(savedLanguage);
  };

  useEffect(() => {
    getLanguage();
  }, []);

  const switchLanguage = async (lng) => {
    await AsyncStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <View
      style={
        {
          // flexDirection: "row",
          // justifyContent: "space-around",
          // padding: 10,
        }
      }
      className=""
    >
      {language === "en" && (
        <TouchableOpacity
          className="bg-slate-200 flex justify-center items-center h-9 w-16  rounded-sm "
          title="සිංහල"
          onPress={() => switchLanguage("si")}
        >
          <Text className="text-slate-500">සිංහල</Text>
        </TouchableOpacity>
      )}
      {language === "si" && (
        <TouchableOpacity
          className="bg-slate-200 flex justify-center items-center h-9 w-16  rounded-sm "
          title="English"
          onPress={() => switchLanguage("en")}
        >
          <Text className="text-slate-500">English</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LanguageSwitcher;
