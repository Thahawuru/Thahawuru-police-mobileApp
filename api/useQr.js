import axios from "axios";
import apiClient from "./apiClient";


export const useQr = () => {
  const getQrDetails = async (data) => {
    console.log("data",data)
    try {
      const response = await apiClient.get(`/qr/${data}`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };



  return {
    getQrDetails,
  };
};
