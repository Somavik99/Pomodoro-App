import React from "react";
import "./App.css";
import styled from "styled-components";
import NavBar from "./Components/NavBar/NavBar";
import Pomodorto from "./Components/Pomodoro/Pomodorto";

function App() {
  return (
    <div className="App">
      <Title>Pomodoro-Timer</Title>
      <NavBar />
      <Pomodorto />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 2.6rem;
  padding: 3.5rem 0;
  text-align: center;
`;
