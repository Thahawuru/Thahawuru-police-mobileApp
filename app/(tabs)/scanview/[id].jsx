import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/header-profile";
import NIC from "@/components/wallet/nicCard";
import DrivingLicence from "@/components/wallet/drivingLicenceCard";
import Passport from "@/components/wallet/passportCard";
import { useCards } from "@/api/useCards";
import { useQr } from "@/api/useQr";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useLocalSearchParams } from "expo-router";
import { useScanContext } from "../../../hooks/useScanContext";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import Card from "@/components/UI/customCard";
import userphoto from "@/assets/images/wanted2.jpg";

const scandetails = () => {
  const [licence, setLicence] = useState({});
  const [nic, setNic] = useState({});
  const [wanted, setWanted] = useState({});

  const { data } = useScanContext();
  useEffect(() => {
    if (data) {
      setLicence(data?.details?.details?.licenceDetails);
      setNic(data?.details?.details?.nicDetails);
      setWanted(data?.wantedPerson);
      console.log(data?.wantedPerson);
    }
  }, [data]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
          <View className="w-full">
            <Header back={true} title={"Scanned Wallet"}></Header>
          </View>

          {wanted && (
            <View className="w-[90%]">
              <Text className="text-bold text-red-500">
                This individual is on the wanted list.
              </Text>
              <View>
                <Person personDetails={wanted}></Person>
              </View>
            </View>
          )}
          <View className="w-[90%]">
            <NIC nic={nic}></NIC>{" "}
          </View>

          <View className="w-[90%] ">
            {/* <DrivingLicence licence={licence}></DrivingLicence> */}
          </View>
          <View className="w-[90%] ">
            {/* <Passport passport={}></Passport> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default scandetails;

const Person = ({ personDetails }) => {
  const { t } = useTranslation();
  const showDetails = (id) => {
    router.push(`/personDetails/${id}`);
  };
  console.log("PERSON", personDetails);

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
                {personDetails?.name}
              </Text>
              <Text className="text-sm font-thin text-gray-600">
                {personDetails?.nic}
              </Text>
              <Text className="text-md font-extralight text-gray-600">
                {personDetails?.reasonForBeingWanted?.toUpperCase()}
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
