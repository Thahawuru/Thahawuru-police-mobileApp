import { View, Text,Image } from 'react-native'
import React from 'react'
import Card from './UI/customCard'
import userphoto from '../assets/images/userphoto.jpg'
import { Link } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuthContext } from "@/hooks/useAuthContext";
import {LinearGradient} from "expo-linear-gradient";
import { useTranslation } from "react-i18next"

const profileCard = () => {
  const { user } = useAuthContext();
  const {t} =useTranslation();
  return (
    <LinearGradient
      colors={["#4A249D", "#F2EEFB"]} // Start and end colors of the gradient
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <View className=" p-10 pb- w-screen flex justify-center items-center">
        <View className="flex  flex-col justify-between items-center">
          <View className="flex  flex-row justify-between items-center">
            <Image
              source={userphoto}
              resizeMode="content"
              className="h-12 w-12 rounded-full"
            ></Image>
          </View>

          <View className="mb-10">
            <Text className="text-slate-100 capitalize text-lg font-semibold ">
              {user?.email.split("@")[0]}
            </Text>
            <Link
              className="text-green-200 mt-3 flex justify-center items-center"
              href="/profile"
            >
              View Profile
              <MaterialIcons
                name="keyboard-arrow-right"
                size={12}
                color="rgb(187 247 208)"
                className="ml-2"
              />
            </Link>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default profileCard;
