import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import userphoto from "../../assets/images/userphoto.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import Tag from "../itemTag";

const officerDetails = ({officerDetails}) => {
  const [show, setShow] = useState(false);


  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex-[3_1_0%] flex justify-start items-start">
            <Text className="text-lg font-semibold">
              Officer Details
            </Text>
            {!show  && <Text className="text-md font-semibold">Name : {officerDetails.name}</Text>}
            {!show  && <Text className="text-xs font-thin">Tap to view details</Text>}

            {show && (
              <View>
                <Tag title="name"> {officerDetails.name}</Tag>
                <Tag title="station"> {officerDetails.station}</Tag>
                <Tag title="rank"> {officerDetails.rank}</Tag>
                <Tag title="mobile"> {officerDetails.mobile}</Tag>
                <Tag title="email"> {officerDetails.email}</Tag>
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

export default officerDetails;