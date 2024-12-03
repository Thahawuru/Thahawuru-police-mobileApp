import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header-profile";
import WantedPersonDetails from "../../components/wallet/wantedPersonDetails";
import { wantedPersons } from "../../api/wantedPersons";
import FormField from "../../components/formfield";
import { useToastContext } from "@/hooks/useToastContext";
import SearchFocus from "../../components/searchFocus";
import SearchList from "../../components/wallet/searchPersons";
import { useIsFocused } from "@react-navigation/native";

const profile = () => {
  const { personList, getList } = wantedPersons();
  const [persons, setPersons] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchOn, setSearchOn] = useState(false);
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
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getWantedPersons();
    }
  });

  const handleSearchResult = (search) => {
    if (persons) {
      const result = persons.filter(
        (person) =>
          person.name.toLowerCase().includes(search.toLowerCase()) ||
          person.nic.toLowerCase().includes(search.toLowerCase())
      );
      setSearchList(result);
    }
  };

  const handleSearch = (search) => {
    if (search.length > 0) {
      setSearchOn(true);
      handleSearchResult(search);
    } else {
      setSearchOn(false);
    }
  };

  const PersonList = personList();
  return (
    <SafeAreaView>
      <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
        <View className="w-full">
          <Header title={"Wanted Persons"}></Header>
        </View>
        <View className="w-[90%] ">
          <FormField
            label={"search"}
            placeholder={"search wanted persons"}
            styles={{ container: "h-[45px] " }}
            onChangeText={handleSearch}
          ></FormField>
        </View>

        {searchOn && (
          <View className="w-[90%] mb-10 flex felx-col gap-2">
            <SearchList personDetails={searchList}></SearchList>
          </View>
        )}
        {!searchOn && (
          <View className="w-[90%] mb-10 flex felx-col gap-2">
            <WantedPersonDetails personDetails={persons}></WantedPersonDetails>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default profile;
