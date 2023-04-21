import React from "react";
import styled from "styled-components";

const RevealModal = () => {
  return <ModalReveal />;
};

export default RevealModal;

const ModalReveal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fffefe24;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
