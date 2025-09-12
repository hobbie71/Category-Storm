// Component imports
import Button from "../../components/Button";

// Context imports
import { useCurrentPage } from "../../contexts/CurrentPage/useCurrentPage";

// Type imports
import { Page } from "../../types/pages";

const Setup = () => {
  const { setCurrentPage } = useCurrentPage();

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 p-8">
      <div className="text-center">
        <h1 className="font-heading text-6xl text-primary-500">Setup Page</h1>
      </div>
      <div className="flex justify-center">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setCurrentPage(Page.GamePreview)}>
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default Setup;
