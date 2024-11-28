import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import userphoto from "../../assets/images/civic.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import Tag from "../itemTag";
import { useTranslation } from "react-i18next";

const WantedVehicleDetails = ({ vehicleDetails }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex-[3_1_0%] flex justify-start items-start">
            <Text className="text-lg font-semibold">{t("vehicleDetails")}</Text>
            {!show && (
              <Text className="text-md font-semibold">
                {t("Vno")}
                {vehicleDetails.no}
              </Text>
            )}
            {!show && <Text className="text-xs font-thin">{t("details")}</Text>}

            {show && (
              <View>
                <Tag title="Registration No"> {vehicleDetails.no}</Tag>
                <Tag title="Brand"> {vehicleDetails.brand}</Tag>
                <Tag title="Model"> {vehicleDetails.model}</Tag>
                <Tag title="Type"> {vehicleDetails.type}</Tag>
                <Tag title="Registrtion Date"> {vehicleDetails.regDate}</Tag>
                <Tag title="Owner"> {vehicleDetails.owner}</Tag>
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

export default WantedVehicleDetails;
