import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { CameraView, Camera } from "expo-camera";
import CameraOverlay from "../../components/UI/cameraOverlay";
import CustomButton from "../../components/UI/customButton";
import CustomModal from "../../components/UI/modal";
import { router } from "expo-router";
import { useQr } from "@/api/useQr";

export default function App() {
  const { getQrDetails } = useQr();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const [scannedToken, setScannedToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [iserror, setIserror] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    if (data) {
      setModalVisible(true);
      setScannedData(`Getting Data!`);
      setIsloading(true);
      try {
        const response = await getQrDetails(data);
        // setQrDetails(response.data.data);
        if(response.status === 200){
          setScannedData(`Verified Wallet Found!`);
          setIsloading(false);
          setIserror(false);
          setVerified(true);
          setScannedToken(data);
        }else{

          setIserror(true);
          setScannedData(`No valid user found!`);
        }
      } catch (error) {
        setIserror(true);
        setScannedData(`failed to load data`);
        // alert(error.message);
      }
    }
  };
  const handleCloseModal = () => {
    setModalVisible(false);
    setVerified(false);
    // setScanned(false);
  };
  const handleActionModal = () => {
    setModalVisible(false);
    setScanned(false);
    router.push(`/scanview/${scannedToken}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={handleCloseModal}>
      <View className=" relative flex flex-1 justify-center items-center ">
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={StyleSheet.absoluteFillObject}
        />
        <CameraOverlay title="Scan Wallet ID" />
        <CustomModal
          visible={modalVisible}
          onClose={handleCloseModal}
          onAction={handleActionModal}
          verified={verified}
          loading={isloading}
          error={iserror}
          title={scannedData}
        ></CustomModal>

        {scanned && (
          // <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
          <View className="absolute bottom-[10%] w-full flex justify-center items-center">
            <CustomButton
              title="Scan Again"
              handelPress={() => setScanned(false)}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
