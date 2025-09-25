import React, { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";

type TimeLeftContextType = {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};

const TimeLeftContext = createContext<TimeLeftContextType | undefined>(
  undefined
);

interface TimeLeftProviderProps {
  children: ReactNode;
}

export const TimeLeftProvider: React.FC<TimeLeftProviderProps> = ({
  children,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(600);

  const value = useMemo(
    () => ({
      timeLeft,
      setTimeLeft,
    }),
    [timeLeft]
  );

  return (
    <TimeLeftContext.Provider value={value}>
      {children}
    </TimeLeftContext.Provider>
  );
};

export { TimeLeftContext };
