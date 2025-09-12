import { useContext } from "react";
import { CurrentPageContext } from "./CurrentPageContext";

export const useCurrentPage = () => {
  const context = useContext(CurrentPageContext);
  if (!context) {
    throw new Error("useCurrentPage must be used within a CurrentPageProvider");
  }
  return context;
};
