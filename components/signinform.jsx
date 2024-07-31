import { View, Text ,Keyboard} from "react-native";
import React from "react";
import FormField from "./formfield";
import CustomButton from "./UI/customButton";
import { router } from "expo-router";
import { useState,useEffect } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useAuthentication } from "@/api/useAuthentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { useToastContext } from '@/hooks/useToastContext'

const signinform = () => {
  const { t } = useTranslation();
  const { showToast } = useToastContext()

  
  
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { dispatch } = useAuthContext();

  const { signin } = useAuthentication();

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const submit = async () => {
    Keyboard.dismiss();
    try {
      const response = await signin({ email, password });
      if (response.status === 200) {
        dispatch({ type: "LOGIN", payload: response.data.data.user });
        AsyncStorage.setItem("user", JSON.stringify(response.data.data.user));
        AsyncStorage.setItem("token", JSON.stringify(response.data.data.token));
        showToast({
          type: "success",
          text: 'Login Suceessful',
          timeout: 2000
      });
        router.push("/home");
      }
    } catch (error) {
      showToast({
        type: "danger",
        text: 'Login Failed!',
    });
    }
  };

  return (
    <View className="w-full flex flex-col justify-center">
      <FormField
        label="Email"
        placeholder={"Email"}
        onChangeText={handleEmailChange}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <FormField
        label="Password"
        placeholder={"Password"}
        onChangeText={handlePasswordChange}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <View className="mt-4">
        <CustomButton title={"Sign In"} handelPress={submit}></CustomButton>
      </View>
    </View>
  );
};

export default signinform;
