import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import userphoto from "../../assets/images/userphoto.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import Tag from "../itemTag";

const WantedPersonDetails = ({personDetails}) => {
  const [show, setShow] = useState(false);


  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex-[3_1_0%] flex justify-start items-start">
            <Text className="text-lg font-semibold">
              Wanted Person Details
            </Text>
            {!show  && <Text className="text-md font-semibold">Name : {personDetails.name}</Text>}
            {!show  && <Text className="text-xs font-thin">Tap to view details</Text>}

            {show && (
              <View>
                <Tag title="NIC"> {personDetails.no}</Tag>
                <Tag title="Name"> {personDetails.name}</Tag>
                <Tag title="Sex"> {personDetails.sex}</Tag>
                <Tag title="Date of Birth"> {personDetails.dob}</Tag>
                <Tag title="Address"> {personDetails.address}</Tag>
                <Tag title="Place of Birth"> {personDetails.pob}</Tag>
                <Tag title="Date of Issue"> {personDetails.doi}</Tag>
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

export default WantedPersonDetails;
