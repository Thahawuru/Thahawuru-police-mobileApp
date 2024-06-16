import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Card from "./UI/customCard";
import logo from "../assets/images/tahauru-logo.png";
import QRCode from "react-native-qrcode-svg";
import { router } from 'expo-router';

const qrCard = () => {
  const wallet = "this-is-tahauru-wallet-id";

  const handleModal = () => {
    router.push("/qrpage");
  };

  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={handleModal}>
        <View>
          <Text className="text-slate-500  capitalize text-sm text-center font-semibold ">
            Scan your wallet ID
          </Text>
          <View className="w-full flex justify-center items-center">
            <QRCode
              size={200}
              value={wallet}
              logo={logo}
              onError={"Not a valid wallet ID"}
              />
          </View>
      </View>
      </TouchableWithoutFeedback>
    </Card>
  );
  };

export default qrCard;
