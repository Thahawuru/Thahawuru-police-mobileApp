import { useContext } from "react";
import { ScanContext } from "../context/scanContext";

export const useScanContext = () => {
  const scan = useContext(ScanContext);
  
  if (!scan) {
    throw new Error('useScanCONTEXT must be used within an ScanProvider');
  }
  
  return scan;
};
