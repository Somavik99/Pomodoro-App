import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { TimerContextProvider } from "../../Context/PomodoroContext";

const NavBar = () => {
  const {IsActive, setIsActive} = useContext(TimerContextProvider);
  const Breaks = ["Work", "Short Break", "Long Break"];

  const HandleClick = (index)=>[
  setIsActive(index)
  ]

  return (
    <NavComponents>
      {Breaks.map((data, i) => {
        return (
          <Tag onClick={()=>HandleClick(i)} IsActive={IsActive === i} key={i}>
            {data}
          </Tag>
        );
      })}
    </NavComponents>
  );
};

export default NavBar;

const NavComponents = styled.div`
  border: 5px;
  border-radius: 3rem;
  height: 3rem;
  width: 35em;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
`;

const Tag = styled.button`
  flex: 1;
  border-radius: 1.8rem;
  background: black;
  color: whitesmoke;

  ${({ IsActive }) =>
    IsActive &&
    css`
      background: ${(props) => props.theme.colors.primary};
    `}
`;
