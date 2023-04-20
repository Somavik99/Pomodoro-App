import React, { createContext,useState } from 'react'


const TimerContextProvider = createContext();
const PomodoroContext = ({children}) => {
    const [IsActive, setIsActive] = useState(0);
    const ActiveState = {IsActive, setIsActive}
  return (
    <TimerContextProvider.Provider value={ActiveState}>
      {children}
    </TimerContextProvider.Provider>
  )
}

export  {PomodoroContext,TimerContextProvider};
