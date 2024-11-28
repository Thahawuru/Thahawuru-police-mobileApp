import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header-profile";
import WantedPersonDetails from "../../components/wallet/wantedPersonDetails";
import { wantedPersons } from "../../api/wantedPersons";
import Formfield from "../../components/formfield";

const profile = () => {
  const { personList } = wantedPersons();

  const PersonList = personList();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
          <View className="w-full">
            <Header title={"Wanted Persons"}></Header>
          </View>
          <View className="w-[90%] ">
            <Formfield
              label={"search"}
              placeholder={"search wanted persons"}
              styles={{ container: "h-[45px] " }}
            ></Formfield>
          </View>

          <View className="w-[90%] mb-10 flex felx-col gap-2">
            <WantedPersonDetails
              personDetails={PersonList}
            ></WantedPersonDetails>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
