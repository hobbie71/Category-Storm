// Component imports
import ColorSystem from "./features/DevTools/ColorSystem";
import Button from "./components/Button";
import Setup from "./features/Setup/Setup";
import GamePreview from "./features/GamePreview/GamePreview";
import GameApp from "./features/GameApp/GameApp";

// Context imports
import { useCurrentPage } from "./contexts/CurrentPage/useCurrentPage";

// Type imports
import { Page } from "./types/pages";

const App = () => {
  const { currentPage, setCurrentPage } = useCurrentPage();

  const renderPage = () => {
    if (currentPage === Page.Setup) return <Setup />;
    else if (currentPage === Page.ColorSystem) return <ColorSystem />;
    else if (currentPage === Page.GamePreview) return <GamePreview />;
    else if (currentPage === Page.GameApp) return <GameApp />;

    return <Setup />;
  };

  return (
    <div className="w-full h-full">
      {/* Dev Tools */}
      {currentPage === "color-system" ? (
        <Button
          variant="outline"
          size="md"
          className="fixed bottom-2 right-2"
          onClick={() => setCurrentPage(Page.Setup)}>
          Back to Setup Page
        </Button>
      ) : (
        <Button
          variant="outline"
          size="md"
          className="fixed bottom-2 right-2"
          onClick={() => setCurrentPage(Page.ColorSystem)}>
          Color System Page
        </Button>
      )}

      {renderPage()}
    </div>
  );
};

export default App;
