import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import NavBar from "./Components/NavBar/NavBar";
import Pomodorto from "./Components/Pomodoro/Pomodorto";
import PomodoroModal from "./Components/Modal/PomodoroModal";
import { GiSettingsKnobs } from "react-icons/gi";

function App() {
  const [Show, setShow] = useState(false);

  const onClose = () => {
    setShow(Show);
  };

  const onOpen = () => {
    setShow(!Show);
  };

  return (
    <div className="App">
      <PomodoroModal onClose={onClose} onOpen={onOpen} />
      <Title>Pomodoro-Timer</Title>
      <NavBar />
      <Pomodorto />
      <CogIcon onClick={onOpen}>
        <GiSettingsKnobs style={{ background: "none" }} />
      </CogIcon>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 2.6rem;
  padding: 3.5rem 0;
  text-align: center;
  background: transparent;
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  background: transparent;
  cursor: pointer;
`;
