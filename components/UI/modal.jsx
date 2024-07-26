// components/UI/CustomModal.js
import React from "react";
import {
  View,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import img from "../../assets/images/verified.png";
import errorimg from "../../assets/images/error.jpg";

const CustomModal = ({
  visible,
  verified,
  onClose,
  onAction,
  title,
  loading,
  error,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex flex-1 justify-center items-center">
          <View style={styles.modalView}>
            {!loading && !error && verified && (
              <Image
                source={img}
                resizeMode="contain"
                className="h-24 w-24 rounded-3xl"
              ></Image>
            )}
            {loading && !error && (
              // <Image
              //   source={img}
              //   resizeMode="contain"
              //   className="h-24 w-24 rounded-3xl"
              // ></Image>
              <View>
                <Text>Loading...</Text>
              </View>
            )}
            {error && (
              <Image
                source={errorimg}
                resizeMode="contain"
                className="h-24 w-24 rounded-3xl"
              ></Image>
            )}

            <Text style={styles.modalText}>{title}</Text>
            <View className="flex flex-row justify-between gap-2">
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={onClose}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
              {onAction && (
                <TouchableOpacity
                  style={[
                    styles.button,
                    styles.buttonClose,
                    { backgroundColor: verified ? "#2196F3" : "#ccc" },
                  ]}
                  onPress={onAction}
                  disabled={!verified}
                >
                  <Text style={styles.textStyle}>View</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 8,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CustomModal;
