import React from "react";
import styled from "styled-components";

const WrapperContent = styled.div`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const MainSection = ({ children }) => {
  return <WrapperContent>{children}</WrapperContent>;
};
export default MainSection;
