import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import image from "../assets/images/tahauru.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerStyle={{height: "100%", justifyContent: "center"}}
      >
        <View className="w-full  justify-center items-center">
          <Image source={image} className="h-[300px] w-[300px]"></Image>
          <View className="">
            <Link
              href={"/signin"}
              className="px-12 py-2  bg-sky-700 text-slate-200 flex justify-center text-bold text-xl rounded-lg align-center  items-center text-center"
            >
              Go{" "}
            </Link>
          </View>     
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
