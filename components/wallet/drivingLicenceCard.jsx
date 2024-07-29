import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import { useCards } from "../../api/useCards";
import userphoto from "../../assets/images/userphoto.jpg";
import Tag from "../itemTag";
import { Ionicons } from "@expo/vector-icons";

const passportCard = ({licence}) => {
  const { getDrivingLicence } = useCards();
  const [show, setShow] = useState(false);


  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center ">
          <View>
            <Text className="text-lg font-semibold">Driving Licence</Text>
            {!show && (
              <Text className="text-md font-semibold">
                Licence No : {licence?.no}
              </Text>
            )}
            {!show && (
              <Text className="text-xs font-thin">Tap to view details</Text>
            )}

            {show && (
              <View>
                <Tag title="No"> {licence?.licenseNumber}</Tag>
                <Tag title="Name"> {licence?.name}</Tag>
                <Tag title="LivingAddress"> {licence?.livingAddress}</Tag>
                {/* <Tag title="Date of Birth"> {license.dob}</Tag> */}
                {/* <Tag title="Date of Issue"> {license.doi}</Tag> */}
                {/* <Tag title="Date of Expiary"> {license.doe}</Tag> */}
                <Tag title="Blood Group"> {licence?.blood_grLocalDate}</Tag>
                {licence.restrictions && (
                  <Tag title="Restrictions">
                    <Ionicons size={24} name="glasses-outline"></Ionicons>
                  </Tag>
                )}
                <Tag title="Vehicle Categories">
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
