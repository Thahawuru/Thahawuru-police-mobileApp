import { View, Text, ScrollView ,Image} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import ProfileCard from "../../components/profileCard";
import QRCard from "../../components/qrCard";
import Tiles from "../../components/tiles";

const home = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full w-screen flex justify-start items-center">
          <View className="w-full">
            <Header></Header>
          </View>
          <View className="w-[90%] -translate-y-10">
            <ProfileCard></ProfileCard>
          </View>
          <View className="w-[90%] mt-5 -translate-y-10">
            <QRCard></QRCard>
          </View>
          <View className="w-[90%] mt-20 -translate-y-10">
            <Tiles></Tiles>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
