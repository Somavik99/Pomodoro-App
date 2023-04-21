import React from "react";
import RevealModal from "../RevealModal/RevealModal";
import PomodoroModalCont from "./PomodoroModalCont";
import { AnimatePresence } from "framer-motion";
const PomodoroModal = ({ Show, onClose }) => {
  return (
    <>
    <AnimatePresence>
    {Show && (
        <>
          <RevealModal />
          <PomodoroModalCont onClose={onClose} Show={Show} />
        </>
      )}
    </AnimatePresence>
     
    </>
  );
};

export default PomodoroModal;
