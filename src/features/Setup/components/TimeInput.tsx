// Context imports
import { useTimeLeft } from "../../../contexts/TimeLeft/useTimeLeft";

// Componet imports
import NumberInput from "../../../components/NumberInput";

const TimeInput = () => {
  const { timeLeft, setTimeLeft } = useTimeLeft();

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newTime = value * 60 + getSeconds();
    setTimeLeft(newTime);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newTime = getMinutes() * 60 + value;
    setTimeLeft(newTime);
  };

  const getMinutes = (): number => Math.floor(timeLeft / 60);
  const getSeconds = (): number => timeLeft % 60;

  const error = timeLeft === 0;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <NumberInput
            label="Minutes"
            value={getMinutes().toString().padStart(2, "0")}
            onChange={handleMinutesChange}
            min={0}
            placeholder="0"
            variant="primary"
            size="md"
            className="text-center"
            error={error}
          />
        </div>
        <span className="text-lg font-medium text-gray-500 relative top-[8px]">
          :
        </span>
        <div className="flex-1">
          <NumberInput
            label="Seconds"
            value={getSeconds().toString().padStart(2, "0")}
            onChange={handleSecondsChange}
            min={0}
            max={59}
            placeholder="00"
            variant="primary"
            size="md"
            className="text-center"
            error={error}
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-600">Time can't be 0:00</p>}
    </div>
  );
};

export default TimeInput;
