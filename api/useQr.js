import axios from "axios";
import apiClient from "./apiClient";


export const useQr = () => {
  const getQrDetails = async (data) => {
    console.log("WALLET ID",data);
    try {
      const response = await apiClient.get(`/qr/${data}`);
      console.log("RESPONSE",response);
      return response;
    } catch (error) {
      console.log("ERROR",error);
      throw new Error(error.response.data.error.message);
    }
  };



  return {
    getQrDetails,
  };
};
