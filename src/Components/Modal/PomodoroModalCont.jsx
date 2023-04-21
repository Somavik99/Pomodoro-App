import React from 'react'
import styled from 'styled-components';

const PomodoroModalCont = ({onOpen, onClose}) => {
  return (
 <Container>
<ModalContent>
    <ModalHeader>
        <ModalTitle>Set Preferred Time</ModalTitle>
        <ModalCloseBtn onClick={onClose}>X</ModalCloseBtn>
    </ModalHeader>
    <ModalBody>

    </ModalBody>
</ModalContent>
 </Container>
  )
}

export default PomodoroModalCont;

const Container = styled.div `
    position: absolute;
    height: 108vh;
    width: 100vw;
    display: grid;
    place-content: center;
    z-index: 150;
    background: #36363659;
`
const ModalContent = styled.div `
    width: 25rem;
    height: 20rem;
    border-radius: 2rem;
`
const ModalHeader = styled.div `

`
const ModalBody = styled.div `
    
`

const ModalTitle = styled.div`
    background: transparent;
    border-radius: 2rem;
`

const ModalCloseBtn = styled.button `
    
`