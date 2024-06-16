import { View, Text } from "react-native";
import React from "react";
import FormField from "./formfield";
import CustomButton from "./UI/customButton";
import { router } from "expo-router";

const signinform = () => {
  const submit = () => {
    console.log("submit");
    router.push("/home");
  };

  return (
    <View className="w-full flex flex-col justify-center">
      <FormField
        label="NIC"
        placeholder={"National Identity Card"}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <FormField
        label="Password"
        placeholder={"Password"}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <View className='mt-4'>
      <CustomButton title={"Sign In"} handelPress={submit}></CustomButton>
      </View>
    </View>
  );
};

export default signinform;
