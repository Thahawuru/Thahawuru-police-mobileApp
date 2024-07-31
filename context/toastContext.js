import { createContext, useRef, useState } from "react";
import { View } from "react-native";
import ToastMessage from "@/components/UI/toaster";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const toastRef = useRef(null);
  const [toastConfig, setToastConfig] = useState({
    type: "success",
    text: "",
    description: "",
    timeout: 1000,
  });

  const showToast = (config) => {
    setToastConfig(config);
    if (toastRef.current) {
      toastRef.current.show();
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* <View className="border-2 border-red-500 w-screen"> */}
        <ToastMessage
          ref={toastRef}
          type={toastConfig.type}
          text={toastConfig.text}
          description={toastConfig.description}
          timeout={2000}
        />
      {/* </View> */}
    </ToastContext.Provider>
  );
};
