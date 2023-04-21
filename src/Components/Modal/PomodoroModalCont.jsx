import { Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { TimerContextProvider } from "../../Context/PomodoroContext";

const PomodoroModalCont = ({ Show, onClose }) => {
  const { Work, setWork, SBreak, setSBreak, LBreak, setLBreak } =
    useContext(TimerContextProvider);

  return (
    <Container>
      <ModalContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModalHeader>
          <ModalCloseBtn onClick={() => onClose(Show)}>X</ModalCloseBtn>
          <ModalTitle style={{ background: "transparent" }}>
            Set Preferred Time
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              work: Work / 60,
              short: SBreak / 60,
              long: LBreak / 60,
            }}
            onSubmit={(values) => {
              setWork(values.work * 60);
              setSBreak(values.short * 60);
              setLBreak(values.long * 60);
              onClose();
            }}
          >
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor="work">Work</label>
                  <Field name="work" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="short">Short Break</label>
                  <Field name="short" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="long">Long Break</label>
                  <Field name="long" min="1" max="60" />
                </FormControl>
              </InputWrapper>
              <div style={{ textAlign: "center" }}>
                <SubmitBtn type="submit">Set Time</SubmitBtn>
              </div>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  );
};

export default PomodoroModalCont;

const SubmitBtn = styled.button`
  padding: 10px 10px;
  margin: 10px 10px;
`;
const InputWrapper = styled.div`
  display: flex;
  background: transparent;
  margin-top: 15px;
  padding: 8px;
  gap: 2rem;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  label {
    background: transparent;
  }
  input {
    width: 100%;
    font-size: 15px;
    padding: 10px;

    border: none;
    border-top: 2px solid black;
    outline: none;
  }
`;

const Container = styled.div`
  position: absolute;
  height: 108vh;
  width: 100vw;
  display: grid;
  place-content: center;
  z-index: 150;
  background: #ffffff15;
  @media (max-width: 600px) {
    height: 108vh;
    width: 100vw;
  }
`;
const ModalContent = styled(motion.div)`
  width: fit-content;
  height: 25rem;
  border-radius: 1.6rem;
  padding: 8px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 8px;
  }
`;
const ModalHeader = styled.div`
  border-radius: 2rem;
`;
const ModalBody = styled.div``;

const ModalTitle = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 20;
`;

const ModalCloseBtn = styled.button`
  background: black;
  color: whitesmoke;
  float: right;
  border: 1px solid gray;
  outline: none;
  font-size: 20px;
  width: 20px;
  border-radius: 2em;
`;
