import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthContext = () => {
  const auth = useContext(AuthContext);
  
  if (!auth) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  
  return auth;
};
