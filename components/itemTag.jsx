import { View, Text } from "react-native";
import React from "react";

const itemTag = ({ children, title }) => {
  return (
    <View className="flex w-full flex-col justify-start items-start mb-5">
      <Text className="text-xs text-slate-700">{title}:</Text>
      <Text className="text-md">{children}</Text>
    </View>
  );
};

export default itemTag;
