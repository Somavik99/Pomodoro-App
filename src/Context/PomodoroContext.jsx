import React, { createContext, useEffect, useState } from "react";

const TimerContextProvider = createContext();
const PomodoroContext = ({ children }) => {
  const [Work, setWork] = useState(25 * 60);
  const [SBreak, setSBreak] = useState(5 * 60 );
  const [LBreak, setLBreak] = useState(30 * 60);
  const [InTime, setInTime] = useState(0);
  const [IsActive, setIsActive] = useState(0);
  const [IsProgress, setIsProgress] = useState(0);
  const [ShowTimer, setShowTimer] = useState(0);
  const [IsStart, setIsStart] = useState(false);

  useEffect(() => {
    switch (IsActive) {
      case 0:
        setShowTimer(Work);
        setInTime(Work);
        break;
      case 1:
        setShowTimer(SBreak);
        setInTime(SBreak);
        break;
      case 2:
        setShowTimer(LBreak);
        setInTime(LBreak);
        break;
      default:
        break;
    }
  }, [IsActive, Work, SBreak, LBreak]);

  return (
    <TimerContextProvider.Provider
      value={{
        IsActive,
        setIsActive,
        IsProgress,
        setIsProgress,
        ShowTimer,
        setShowTimer,
        IsStart,
        setIsStart,
        InTime,
        setInTime,
        Work,
        setWork,
        SBreak,
        setSBreak,
        LBreak,
        setLBreak,
      }}
    >
      {children}
    </TimerContextProvider.Provider>
  );
};

export { PomodoroContext, TimerContextProvider };
