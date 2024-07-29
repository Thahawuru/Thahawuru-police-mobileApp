import { createContext, useEffect, useReducer } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const ScanContext = createContext();

const scanReducer = (state, action) => {
  switch (action.type) {
    case "SCAN":
      return {
        ...state,
        data: action.payload,
        isScanned:true
      };
    case "CLEAR":
      return {
        ...state,
        data:null,
        isScanned:false
      };
    default:
      return state;
  }
};

export const ScanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scanReducer, {
    data: null,
    isScanned: false,
  });

  return (
    <ScanContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ScanContext.Provider>
  );
};
