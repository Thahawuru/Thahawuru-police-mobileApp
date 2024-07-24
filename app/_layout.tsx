import "react-native-reanimated";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import { I18nextProvider } from "react-i18next";
import { AuthProvider } from "../context/authContext";
import i18n from "../i18n";

library.add(fab, faSquareCheck);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    monospace: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            ></Stack.Screen>
          </Stack>
        </I18nextProvider>
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
