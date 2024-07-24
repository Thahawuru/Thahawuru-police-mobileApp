import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import image from "@/assets/images/tahauru.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/languageSwitcher";
import { useAuthContext } from "@/hooks/useAuthContext";

const index = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View className="w-full flex-1  justify-center items-center">
          <Image source={image} className="h-[300px] w-[300px]"></Image>
          <View className="">
            <Link
              href={"/signin"}
              className="w-[200px] py-2  bg-blue-900 text-slate-200 flex justify-center text-bold text-xl rounded-lg align-center  items-center text-center"
            >
              {t("go")} {/* Use translation key */}
            </Link>
          </View>
        </View>
        <View className="w-full flex-[0.1] flex justify-end items-center ">
          <LanguageSwitcher></LanguageSwitcher>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
