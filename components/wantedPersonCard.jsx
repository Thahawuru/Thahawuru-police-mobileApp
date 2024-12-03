import { View, Text, Image } from "react-native";
import userphoto from "@/assets/images/wanted2.jpg";

const Card = ({ person }) => {
  return (
    <View className=" px-10 py-10 flex h-full justify-start items-center">
      <View className="relative flex items-center justify-center">
        <Image
          source={userphoto}
          resizeMode="contain"
          className="h-80 w-80 rounded-lg "
          // style={{ borderRadius: 20 }}
        />
      </View>
      <View className="w-full flex gap-5 justify-start items-center px-5">
        <Detail title={"Name"} value={person?.name}></Detail>
        <Detail title={"NIC"} value={person?.nic}></Detail>
        <Detail title={"Gender"} value={person?.gender}></Detail>
        <Detail title={"d.o.b"} value={person?.dob}></Detail>
        <Detail title={"body Type"} value={person?.bodyType}></Detail>
        <Detail title={"height"} value={person?.height}></Detail>
        <Detail title={"Tone"} value={person?.color}></Detail>
        <Detail title={"Other"} value={person?.otherInfo}></Detail>
        <Detail title={"Reason"} value={person?.reasonForBeingWanted}></Detail>
      </View>
    </View>
  );
};

export default Card;

const Detail = ({ title, value }) => {
  return (
    <View className="flex flex-row justify-start items-center gap-2 w-full ">
      <Text className="text-xs text-gray-600 capitalize">{title} :</Text>
      <Text className="text-md text-gray-900">{value}</Text>
    </View>
  );
};
