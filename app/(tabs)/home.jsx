import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import ProfileCard from "../../components/welcomeCard";
import QRCard from "../../components/qrCard";
import Tiles from "../../components/tiles";
import VehicleCard from "@/components/vehicle-searchCard";

const home = () => {
  return (
    <SafeAreaView>
      <View className="h-full w-screen flex justify-start items-center  min-h-screen bg-secondry-2">
        <View className="w-full">
          <Header></Header>
        </View>
        <View className="w-[90%] -translate-y-10">
          <ProfileCard></ProfileCard>
        </View>
        <ScrollView>
          <View className="\flex justify-center items-center">
            <View className="w-[95%] mt-5 ">
              {/* <QRCard></QRCard> */}
              <VehicleCard></VehicleCard>
            </View>
            <View className="w-[90%] mt-20 -translate-y-10">
              <Tiles></Tiles>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default home;
