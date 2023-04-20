import React from "react";
import styled from "styled-components";
import ProgressBar from "./PogressBar/ProgressBar";

const Pomodorto = () => {
  return (
    <PomoComponent>
      <ProgressBar />
    </PomoComponent>
  );
};

export default Pomodorto;

const PomoComponent = styled.div`
  width: 34.6rem;
  height: 34.6rem;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
