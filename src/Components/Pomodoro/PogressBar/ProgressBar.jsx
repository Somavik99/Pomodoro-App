import React, { useContext, useState } from "react";
import styled from "styled-components";
import Timer from "./Timer/Timer";
import { TimerContextProvider } from "../../../Context/PomodoroContext";

const ProgressBar = () => {
  const { IsProgress, setIsProgress } = useContext(TimerContextProvider);

  return (
    <OuterCircle IsProgress={IsProgress}>
      <InnerCircle>
        <Timer />
      </InnerCircle>
    </OuterCircle>
  );
};

export default ProgressBar;

const OuterCircle = styled.div`
  width: 33rem;
  height: 33rem;
  /* background: black; */

  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    black
      ${({ IsProgress }) => {
        return IsProgress;
      }}%,
    transparent
      ${({ IsProgress }) => {
        return IsProgress;
      }}%
  );
`;

const InnerCircle = styled.div`
  width: 32.6rem;
  height: 32.6rem;

  border-radius: 50%;
  display: grid;
  place-items: center;
`;
