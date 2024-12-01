import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import userphoto from "../../assets/images/wanted2.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import Tag from "../itemTag";
import { useTranslation } from "react-i18next";

const WantedPersonDetails = ({ personDetails }) => {
  return (
    <View className="flex w-full h-[71vh] py-1 overflow-hidden flex-col justify-center items-center">
      <ScrollView className="w-full px-3">
        {personDetails && personDetails.length > 0 ? (
          personDetails.map((person, index) => (
            <Person key={index} personDetails={person}></Person>
          ))
        ) : (
          <Text>No person details available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default WantedPersonDetails;

const Person = ({ personDetails }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  return (
    // <View className="border-2 border-blue-500">
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex-[3_1_0%] flex justify-start items-start">
            {/* <Text className="text-lg font-semibold">
              {t("wantedPeopleDetails")}
            </Text> */}
            {!show && (
              <>
                <Text className="text-md font-semibold">
                  {t("Oname")}: {personDetails.name}
                </Text>
                <Text className="text-md font-semibold">
                  {t("nic2")}: {personDetails.nic}
                </Text>
              </>
            )}
            {/* {!show && (
              <Text className="text-xs font-thin">{t("details")} </Text>
            )} */}

            {show && (
              <View>
                <Tag title={t("nic2")}> {personDetails.nic}</Tag>
                <Tag title={t("name")}> {personDetails.name}</Tag>
                <Tag title={t("sex")}> {personDetails.gender}</Tag>
                <Tag title={t("DOB")}> {personDetails.dob}</Tag>
                {/* <Tag title={t("address")}> {personDetails.address}</Tag> */}
                {/* <Tag title={t("placeOfBirth")}> {personDetails.pob}</Tag> */}
                <Tag title={t("reason")}>
                  {" "}
                  {personDetails.reasonForBeingWanted}
                </Tag>
              </View>
            )}
          </View>
          <View className="relative flex-1 w-full flex items-end justify-end">
            <Image
              source={userphoto}
              resizeMode="contain"
              className="h-20 w-20"
              style={{ borderRadius: 20 }}
            />
            <View
              className=" w-5
            h-5 "
            >
              {/* {nic.sex === "male" && (
                <MaterialIcons size={24} name="boy"></MaterialIcons>
              )} */}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </View> */}
    </Card>
  );
};
