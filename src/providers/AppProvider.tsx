import { CurrentPageProvider } from "../contexts/CurrentPage/CurrentPageContext";
import { TimeLeftProvider } from "../contexts/TimeLeft/TimeLeftContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CurrentPageProvider>
      <TimeLeftProvider>{children}</TimeLeftProvider>
    </CurrentPageProvider>
  );
};

export default AppProvider;
