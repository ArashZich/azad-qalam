import styled from "styled-components";
import React, { Fragment } from "react";
import _ from "lodash";
import { useTranslation } from "react-i18next";

const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

const ModalOverlay = styled.a`
  background: rgba(0, 0, 0, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ModalClose = styled.img`
  float: right !important;
  text-decoration: none !important;
  /* cursor: inherit; */
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 10px;
  right: 5px;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  height: 80%;
  max-width: 70%;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  border-radius: 10px;
`;

const ModalBody = styled.div`
  overflow-y: auto;
  height: 80%;
  padding: 0px 10px;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

const Button = styled.button`
  background: #152ab3;
  color: white;
  font-size: 20pt;
  margin: 10px;
  padding: 15px 10px;
  border: 2px solid #152ab3;
  border-radius: 10px;
  cursor: initial;
  width: 60%;
  box-shadow: 2px 5px 5px grey;
  direction: rtl;
`;

const Modal = ({ title, children, active, hideModal, showModal, value }) => {
  const { t } = useTranslation("Fonts");
  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalClose onClick={() => hideModal()} src="/images/close.svg" />
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
      <Button onClick={() => showModal()}>
        {!_.isEmpty(value) ? `${title}: ${t(value)}` : title}
      </Button>
    </Fragment>
  );
};

export default Modal;
