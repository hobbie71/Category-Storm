import { CurrentPageProvider } from "../contexts/CurrentPage/CurrentPageContext";
import { TimeLeftProvider } from "../contexts/TimeLeft/TimeLeftContext";
import { CategoriesProvider } from "../contexts/Categories/CategoriesContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CurrentPageProvider>
      <CategoriesProvider>
        <TimeLeftProvider>{children}</TimeLeftProvider>
      </CategoriesProvider>
    </CurrentPageProvider>
  );
};

export default AppProvider;
