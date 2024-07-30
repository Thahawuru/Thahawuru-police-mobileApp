import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../components/UI/customCard";
import { useTranslation } from "react-i18next";

const tiles = () => {
const {t}=useTranslation();

  return (
    <View className="w-full  flex justify-around flex-row items-center">
      <Tile
      title={t("wallet")}
      icon="wallet" 
      color="orange" 
      href="/profile"

      ></Tile>
      <Tile
        title={t("contact")}
        icon="contact-support"
        color="green"
        href="/home"
      ></Tile>
      <Tile
        title={t("Settings")}
        icon="settings"
        color="silver"
        href="/home"
      ></Tile>
    </View>
  );
};

export default tiles;

const Tile = ({ title, href, icon, color }) => {
  return (
    <Link href={href} className="">
      <Card color="#fff">
        <View className="flex justify-center items-center">
          <MaterialIcons name={icon} color={color} size={35}></MaterialIcons>
          <Text className="text-xs  text-slate-500">{title}</Text>
        </View>
      </Card>
    </Link>
  );
};
