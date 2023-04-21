import React from "react";
import RevealModal from "../RevealModal/RevealModal";
import PomodoroModalCont from "./PomodoroModalCont";
const PomodoroModal = ({ onOpen, onClose }) => {
  return (
    <>
      {onOpen && (
        <>
          <RevealModal />
          <PomodoroModalCont onClose={onClose} onOpen={onOpen} />
        </>
      )}
    </>
  );
};

export default PomodoroModal;
