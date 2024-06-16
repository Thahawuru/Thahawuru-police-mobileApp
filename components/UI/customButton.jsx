import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const customButton = ({ handelPress, isLoading, title }) => {
  return (
    <>
      <TouchableOpacity
        onPress={handelPress}
        disabled={isLoading}
        className="bg-sky-700 p-4 flex justify-center items-center  rounded-lg"
      >
        <Text className='text-slate-200  capitalize text-xl'>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default customButton;
