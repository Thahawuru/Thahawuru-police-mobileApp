import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header-profile";
import WantedVehicleDetails from "../../components/wallet/wantedVehicleDetails";
import { wantedVehicles } from "../../api/wantedVehicles";
import Formfield from "../../components/formfield";


const profile = () => {

  const {vehicleList} = wantedVehicles();

  const WantedVehicles = vehicleList();

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
          <View className="w-full">
            <Header title={"Wanted Vehicles"}></Header>
          </View>
          <View className="w-[90%] ">
            <Formfield label={"search"} placeholder={"search vehicle plates"} styles={{container:"h-[45px] "}}></Formfield>
          </View>
          <View className='w-[90%]'>
            <WantedVehicleDetails vehicleDetails={WantedVehicles}></WantedVehicleDetails>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
