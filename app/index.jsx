import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect } from "react";
import { router, useSegments } from "expo-router";
import { useRootNavigationState } from "expo-router";
import image from "@/assets/images/tahauru-logo.png";

const index = () => {
  const segments = useSegments();
  const { loading, isAuthenticated } = useAuthContext();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    const isAuthGroup = segments[0] === "(auth)";
    const isAppGroup = segments[0] === "(tabs)" || segments[0] === "(settings)";
    if (loading && !navigationState?.key) return;
    if (!loading && !isAuthenticated && !isAuthGroup) {
      router.push("(auth)");
    } else if (isAuthenticated && !isAppGroup) {
      router.push("/(tabs)/home");
    }
  }, [loading, segments, isAuthenticated, navigationState?.key]);

  return (
  <>
    <View className="flex justify-center items-center w-screen h-screen">
      <Image source={image} className="h-[100px] w-[100px]" ></Image>
    </View>
  </>
  );
};

export default index;
