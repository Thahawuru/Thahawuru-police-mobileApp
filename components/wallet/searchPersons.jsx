import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import userphoto from "../../assets/images/wanted2.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import Tag from "../itemTag";
import { useTranslation } from "react-i18next";
import { router } from "expo-router";

const SearchList = ({ personDetails }) => {
  return (
    <View className="flex w-full h-[71vh] py-1 overflow-hidden flex-col justify-center items-center">
      <ScrollView className="w-full px-3">
        {personDetails && personDetails.length > 0 ? (
          personDetails.map((person, index) => (
            <Person key={index} personDetails={person}></Person>
          ))
        ) : (
          <Text>no results</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchList;

const Person = ({ personDetails }) => {
  const { t } = useTranslation();
  const showDetails = (id) => {
    router.push(`/personDetails/${id}`);
  };

  return (
    <View className="border-b-2 border-slate-100 py-2 flex justify-center items-center ">
      <TouchableWithoutFeedback
        onPress={() => showDetails(personDetails?.userid)}
      >
        <View className="flex flex-row justify-start items-center w-full">
          <View className="relative flex-1 w-[20%] flex items-start justify-center  ">
            <Image
              source={userphoto}
              resizeMode="contain"
              className="h-12 w-12 rounded-full"
              style={{ borderRadius: 20 }}
            />
          </View>

          <View className="flex justify-center w-[80%] ">
            <Text className="text-md font-semibold text-gray-900">
              {personDetails.name}
            </Text>
            <Text className="text-xs font-thin text-gray-700">
              {personDetails.nic}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
