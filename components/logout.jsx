import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useAuthentication } from "../api/useAuthentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useTranslation } from "react-i18next";

const logout = () => {
  //   const { logout } = useAuthentication();
  const { dispatch } = useAuthContext();

  const {t} =useTranslation();

  const handleLogout = async () => {
    try {
      // await logout()
      dispatch({ type: "LOGOUT" });
      AsyncStorage.removeItem("user");
      AsyncStorage.removeItem("token");
      //   router.push("(auth)");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLogout} className="">
        <Text className="text-red-400 text-lg capitalize">{t("logout")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default logout;
