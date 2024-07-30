import { View, Text, Image,TouchableWithoutFeedback } from "react-native";
import {useState} from "react";
import Card from "../UI/customCard";
import { useCards } from "../../api/useCards";
import userphoto from "../../assets/images/userphoto.jpg";
import Tag from "../itemTag";
import { useTranslation } from "react-i18next";


const passportCard = ({passport}) => {
  const {t} =useTranslation();
  const [show, setShow] = useState(false);

  return (
    <Card color={"#fff"}>
         <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex-[3_1_0%] flex justify-start items-start">
            <Text className="text-lg font-semibold">
              {t("passport")}
            </Text>
            {!show  && <Text className="text-md font-semibold">{t("passportNo")} : {passport.no}</Text>}
            {!show  && <Text className="text-xs font-thin">{t("details")}</Text>}

            {show && (
              <View>
                <Tag title={t("nic2")}> {passport.no}</Tag>
                <Tag title={t("name")}>{ passport.name}</Tag>
                <Tag title={t("sex")}> {passport.sex}</Tag>
                <Tag title={t("DOB")}> {passport.dob}</Tag>
                <Tag title={t("DOI")}> {passport.doi}</Tag>
                <Tag title={t("DOE")}> {passport.doe}</Tag>
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

export default passportCard;
