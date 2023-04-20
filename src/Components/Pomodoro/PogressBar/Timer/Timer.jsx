import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TimerContextProvider } from "../../../../Context/PomodoroContext";

const Timer = () => {
  
  const TimerState = useContext(TimerContextProvider);
  const StartState = useContext(TimerContextProvider);
  const {ShowTimer, setShowTimer} = TimerState
const { IsStart, setIsStart } = StartState
  useEffect(() => {
    if (IsStart && ShowTimer > 0) {
      const interval = setInterval(() => {
        setShowTimer((ShowTimer) => ShowTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [ShowTimer, IsStart]);

  const StartPauseTimer = () => {
    setIsStart(!IsStart);
  };

  const ViewTime = () => {
    const min = Math.floor(ShowTimer / 60);
    const sec = ShowTimer % 60;

    return `${min < 10 ? "0" + min : min}|${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <TimerContainer>
      <TimerText>{ViewTime(ShowTimer)}</TimerText>
      <InitiationBtn onClick={StartPauseTimer}>
        {IsStart ? "Pause" : "Start"}
      </InitiationBtn>
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  background: transparent;
  display: grid;
  align-items: center;
`;
const TimerText = styled.h2`
  font-size: 4em;
  background: transparent;
`;

const InitiationBtn = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  text-align: center;
`;
