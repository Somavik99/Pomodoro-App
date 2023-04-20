import React, { createContext, useState } from "react";

const TimerContextProvider = createContext();
const PomodoroContext = ({ children }) => {

    const [Work, setWork] = useState(25 * 60);
    const [SBreak, setSBreak] = useState( 5*60 );
const [LBreak, setLBreak] = useState(30*60);

  const [IsActive, setIsActive] = useState(0);
  const [IsProgress, setIsProgress] = useState(0);
  const [ShowTimer, setShowTimer] = useState(0);
  const [IsStart, setIsStart] = useState(false);
 
  return (
    <TimerContextProvider.Provider
      value={{IsActive, setIsActive, IsProgress, setIsProgress,ShowTimer, setShowTimer,IsStart, setIsStart}}
    >
      {children}
    </TimerContextProvider.Provider>
  );
};

export { PomodoroContext, TimerContextProvider };
