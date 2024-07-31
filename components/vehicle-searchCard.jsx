import { View, Text, Image } from "react-native";
import React from "react";
import Card from "./UI/customCard";
import userphoto from "../assets/images/userphoto.jpg";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useTranslation } from "react-i18next";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Formfield from "./formfield";
import { TouchableOpacity } from "react-native";

const profileCard = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  return (
    <Card color="#FFF">
      <View className="flex  flex-row gap-2 justify-between items-center">
        <View className="flex-[0.2]">
          {/* <Image
            source={userphoto}
            resizeMode="content"
            className="h-12 w-12 rounded-full"
          ></Image> */}

          <MaterialCommunityIcons name="car" size={34} color={"orange"}></MaterialCommunityIcons>
        </View>
        <View className="flex-[0.8] flex justify-end items-end ">
          <View className="w-full flex justify-start items-start p-2">
        <Text>Search Vehicle</Text>
          </View>
        <View className="w-full ">
            <Formfield label={"search"} placeholder={"Ex :KX - 8978"} styles={{container:"h-[45px] "}}></Formfield>
          </View>
          <View className="w-[50%] ">
            <TouchableOpacity  className="bg-secondry-1 p-2 rounded flex justify-center items-center"><Text className="text-slate-300">Search</Text></TouchableOpacity>
          </View>

        </View>
      </View>
    </Card>
  );
};

export default profileCard;
