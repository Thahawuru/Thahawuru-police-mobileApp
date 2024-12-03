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

const WantedPersonDetails = ({ personDetails }) => {
  return (
    <View className="flex w-full h-[71vh] py-1 overflow-hidden flex-col justify-center items-center">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        className="w-full px-3"
      >
        {personDetails && personDetails.length > 0 ? (
          personDetails.map((person, index) => (
            <Person key={index} personDetails={person}></Person>
          ))
        ) : (
          <Text>No person details available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default WantedPersonDetails;

const Person = ({ personDetails }) => {
  const { t } = useTranslation();
  const showDetails = (id) => {
    router.push(`/personDetails/${id}`);
  };

  return (
    // <View className="border-2 border-blue-500">
    <Card color={"#fff"}>
      <TouchableWithoutFeedback
        onPress={() => showDetails(personDetails?.userid)}
      >
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex flex-row justify-start items-center ">
            <View className="relative flex items-center justify-center w-[40%]">
              <Image
                source={userphoto}
                resizeMode="contain"
                className="h-24 w-24 rounded-full"
                // style={{ borderRadius: 20 }}
              />
            </View>

            <View className="flex justify-center items-start w-[60%] ">
              <Text className="text-md font-semibold text-gray-900">
                {personDetails.name}
              </Text>
              <Text className="text-sm font-thin text-gray-600">
                {personDetails.nic}
              </Text>
              <Text className="text-md font-extralight text-gray-600">
                {personDetails.reasonForBeingWanted.toUpperCase()}
              </Text>
            </View>

            {/* {!show && (
              <Text className="text-xs font-thin">{t("details")} </Text>
            )} */}
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </View> */}
    </Card>
  );
};
