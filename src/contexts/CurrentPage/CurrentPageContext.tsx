import React, { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import { Page } from "../../types/pages";

type CurrentPageContextType = {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
};

const CurrentPageContext = createContext<CurrentPageContextType | undefined>(
  undefined
);

interface CurrentPageProviderProps {
  children: ReactNode;
}

export const CurrentPageProvider: React.FC<CurrentPageProviderProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Setup);

  const value = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
    }),
    [currentPage]
  );

  return (
    <CurrentPageContext.Provider value={value}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export { CurrentPageContext };
