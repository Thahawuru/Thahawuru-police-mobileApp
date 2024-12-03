import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router/build/hooks";
import Card from "../../../components/wantedPersonCard";
import { wantedPersons } from "@/api/wantedPersons";
import { useToastContext } from "@/hooks/useToastContext";
import { useEffect, useState } from "react";

const PersonDetails = () => {
  const { id } = useLocalSearchParams();
  const { getPerson } = wantedPersons();
  const { showToast } = useToastContext();
  const [person, setPerson] = useState();

  const getDetails = async () => {
    if (id) {
      try {
        const response = await getPerson(id);
        setPerson(response?.data?.data);
      } catch (error) {
        showToast({
          type: "warning",
          text: "failed to get data",
          timeout: 1000,
        });
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    // if (isFocused) {
    setPerson({});
    getDetails();
    // }
  }, [id]);
  return (
    <>
      <View>
        <Card person={person}></Card>
      </View>
    </>
  );
};

export default PersonDetails;
