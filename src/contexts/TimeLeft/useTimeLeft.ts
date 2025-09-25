import { useContext } from "react";
import { TimeLeftContext } from "./TimeLeftContext";

export const useTimeLeft = () => {
  const context = useContext(TimeLeftContext);
  if (!context) {
    throw new Error("useTimeLeft must be used within a TimeLeftProvider");
  }
  return context;
};
