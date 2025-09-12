import { CurrentPageProvider } from "../contexts/CurrentPage/CurrentPageContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <CurrentPageProvider>{children}</CurrentPageProvider>;
};

export default AppProvider;
