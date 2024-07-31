import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import image from "@/assets/images/logo-white.png";
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
        <View className="w-full  flex-1  justify-between items-center">
          <View className="justify-center items-center flex-[0.9]">
            <Image
              source={image}
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
              }}
              className=""
            ></Image>
          </View>
          <View className="w-full px-8 flex-[0.1]">
            <Link
              href={"/signin"}
              className="w-full py-4  bg-secondry-1 text-slate-200 flex justify-center text-bold text-xl rounded-[200px] align-center  items-center text-center"
            >
              {t("go")} {/* Use translation key */}
            </Link>
          </View>
        </View>
        <View className="w-full flex-[0.1] p-3 flex justify-end items-center ">
          <LanguageSwitcher></LanguageSwitcher>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
