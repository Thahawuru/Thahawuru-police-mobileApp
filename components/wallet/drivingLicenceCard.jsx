import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import { useCards } from "../../api/useCards";
import userphoto from "../../assets/images/userphoto.jpg";
import Tag from "../itemTag";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const passportCard = ({licence}) => {
  const {t} =useTranslation();
  const { getDrivingLicence } = useCards();
  const [show, setShow] = useState(false);


  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center ">
          <View>
            <Text className="text-lg font-semibold">{t("DringLicense")}</Text>
            {!show && (
              <Text className="text-md font-semibold">
                {t("licenseNo")} : {licence?.no}
              </Text>
            )}
            {!show && (
              <Text className="text-xs font-thin">{t("details")}</Text>
            )}

            {show && (
              <View>
                <Tag title={t("No")}> {licence?.licenseNumber}</Tag>
                <Tag title={t("name")}> {licence?.name}</Tag>
                <Tag title={t("address")}> {licence?.livingAddress}</Tag>
                {/* <Tag title="Date of Birth"> {license.dob}</Tag> */}
                {/* <Tag title="Date of Issue"> {license.doi}</Tag> */}
                {/* <Tag title="Date of Expiary"> {license.doe}</Tag> */}
                <Tag title={t("Blood")}> {licence?.blood_grLocalDate}</Tag>
                {licence.restrictions && (
                  <Tag title={t("restrictions")}>
                    <Ionicons size={24} name="glasses-outline"></Ionicons>
                  </Tag>
                )}
                <Tag title={t("vehicleC")}>
                  {" "}
                  {licence?.categories?.join(", ")}
                </Tag>
              </View>
            )}
          </View>
          <View>
            <Image
              source={userphoto}
              resizeMode="contain"
              className="h-20 w-20"
              style={{ borderRadius: 20 }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
};

export default passportCard;
