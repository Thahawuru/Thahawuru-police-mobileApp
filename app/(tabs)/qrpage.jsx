import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import Card from "../../components/UI/customCard";
import QRCode from "react-native-qrcode-svg";
import logo from "../../assets/images/tahauru-logo.png";
import ViewShot from "react-native-view-shot";

const qrpage = () => {
  const wallet = "this-is-tahauru-wallet-id";
  const isPresented = router.canGoBack();
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center">
        <Header back={true}></Header>
        <View className="w-[95%] -translate-y-10">
          <Card color="#fff">
            <View className="flex justify-center items-center">
              <Text className="text-xl mb-5">Your Wallet QR</Text>
              <View>
                <ViewShot
                  ref={(ref) => (this.viewShot = ref)}
                  options={{ format: "jpg", quality: 0.9 }}
                >
                  <QRCode
                    size={300}
                    value={wallet}
                    logo={logo}
                    onError={"Not a valid wallet ID"}
                  />
                </ViewShot>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default qrpage;
