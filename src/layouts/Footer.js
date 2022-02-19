import React from "react";
import { Copyright } from "../components";
import styled from "styled-components";
const Wrapper = styled.div`
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  text-align: center;
  height: 70px;
  box-shadow: 0 -4px 5px -1px rgba(0, 0, 0, 0.5);
`;
const Footer = () => {
  return (
    <Wrapper>
      <Copyright />
    </Wrapper>
  );
};
export default Footer;
