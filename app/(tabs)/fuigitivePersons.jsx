import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header-profile";
import WantedPersonDetails from "../../components/wallet/wantedPersonDetails";
import { wantedPersons } from "../../api/wantedPersons";
import Formfield from "../../components/formfield";
import { useToastContext } from "@/hooks/useToastContext";
import SearchFocus from "../../components/searchFocus";

const profile = () => {
  const { personList, getList } = wantedPersons();
  const [persons, setPersons] = useState([]);
  const { showToast } = useToastContext();

  const getWantedPersons = async () => {
    try {
      response = await getList();
      setPersons(response?.data?.data);
    } catch (error) {
      showToast({
        type: "warning",
        text: "failed to get data",
        timeout: 1000,
      });
    }
  };
  useEffect(() => {
    getWantedPersons();
  }, []);

  const PersonList = personList();
  return (
    <SafeAreaView>
      <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
        <View className="w-full">
          <Header title={"Wanted Persons"}></Header>
        </View>
        <View className="w-[90%] ">
          <SearchFocus
            label={"search"}
            placeholder={"search wanted persons"}
            styles={{ container: "h-[45px] " }}
            route={"/(tabs)/searchPersons"}
          ></SearchFocus>
        </View>

        <View className="w-[90%] mb-10 flex felx-col gap-2">
          <WantedPersonDetails personDetails={persons}></WantedPersonDetails>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
