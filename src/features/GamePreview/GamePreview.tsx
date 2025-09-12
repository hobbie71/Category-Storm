// Component imports
import Button from "../../components/Button";
import Section from "../../components/Section";

// Context imports
import { useCurrentPage } from "../../contexts/CurrentPage/useCurrentPage";

// Type imports
import { Page } from "../../types/pages";

const GamePreview = () => {
  const { setCurrentPage } = useCurrentPage();

  const handleStartGame = () => {
    setCurrentPage(Page.GameApp);
  };

  return (
    <div className="projector-page flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Big Title */}
      <div className="mb-12">
        <h1 className="font-heading text-9xl animate-pulse drop-shadow-2xl mb-6">
          Category Storm!
        </h1>
      </div>

      {/* Basic Instructions */}
      <Section variant="bordered" className="p-4">
        <h2 className="font-subheading text-5xl text-primary-600 mb-8">
          How to Play
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="text-6xl animate-bounce">👀</div>
            <h3 className="font-subheading text-3xl text-primary-700">SEE</h3>
            <p className="text-xl text-gray-700">
              A category appears on screen
            </p>
          </div>

          <div>
            <div className="text-6xl animate-bounce delay-300">🏃‍♀️</div>
            <h3 className="font-subheading text-3xl text-accent-700">RACE</h3>
            <p className="text-xl text-gray-700">Run to the whiteboard</p>
          </div>

          <div>
            <div className="text-6xl animate-bounce delay-600">✍️</div>
            <h3 className="font-subheading text-3xl text-primary-700">WRITE</h3>
            <p className="text-xl text-gray-700">
              Write as many answers as you can!
            </p>
          </div>
        </div>
      </Section>

      {/* Big Start Button */}
      <div className="space-y-6 mt-6">
        <Button
          variant="primary"
          size="lg"
          onClick={handleStartGame}
          className="text-6xl px-16 py-8 font-heading shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-white">
          🌪️ START GAME 🌪️
        </Button>
      </div>
    </div>
  );
};

export default GamePreview;
