import { useContext } from "react";
import { ToastContext } from "../context/toastContext";

export const useToastContext = () => {
  const toast = useContext(ToastContext);
  
  if (!toast) {
    throw new Error('useToastContext must be used within an ToastProvider');
  }
  
  return toast;
};
