import React, { ReactNode } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import styled from 'styled-components';

interface Props {
  show: boolean;
  onClose: () => void;
  onBackDropPress: () => void;
  children: ReactNode;
  title?: string;
}

const Modal = ({ show, onClose, children, title, onBackDropPress }: Props) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <>
      <StyledModalOverlay onClick={onBackDropPress} />

      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            <AiOutlineCloseCircle />
          </a>
        </StyledModalHeader>
        {title && <h1>{title}</h1>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </>
  ) : null;

  return modalContent;
};

const StyledModalBody = styled.div`
  padding-top: 10px;

  display: flex;
  flex-direction: column;

  flex: 1;

  /* background-color: green; */
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 2.5rem;
`;

const StyledModal = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 800px;

  min-height: 333px;

  /* height: 100%;
  max-height: 600px; */

  border-radius: 10px;

  padding: 15px;

  z-index: 997;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    font-size: 2.2rem;
  }
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 21;
`;

export default Modal;
