import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import userphoto from "../../assets/images/userphoto.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import Tag from "../itemTag";
import { useTranslation } from "react-i18next";

const nicCard = ({nic}) => {
  const {t} =useTranslation();
  const [show, setShow] = useState(false);


  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex-[3_1_0%] flex justify-start items-start">
            <Text className="text-lg font-semibold">
              {t("NIC")}
            </Text>
            {!show  && <Text className="text-md font-semibold">{t("nic")}{nic.no}</Text>}
            {!show  && <Text className="text-xs font-thin">{t("details")}</Text>}

            {show && (
              <View>
                <Tag title={t("nic2")}> {nic.identityNumber}</Tag>
                <Tag title={t("name")}> {nic.name}</Tag>
                {/* <Tag title="Email"> {nic.email}</Tag>
                <Tag title="Sex"> {nic.sex}</Tag> */}
                <Tag title={t("DOB")}> {nic.dob}</Tag>
                <Tag title="Address"> {nic.livingAddress}</Tag>
                <Tag title="Place of Birth"> {nic.birthPlace}</Tag>
                <Tag title="Date of Issue"> {nic.doi}</Tag>
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
    </Card>
  );
};

export default nicCard;
