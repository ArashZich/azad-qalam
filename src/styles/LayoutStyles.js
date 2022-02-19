import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerView = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 600px) {
    height: 90vh;
  }
`;

const ImageLogo = styled.img`
  width: 50px;
  position: relative;
  right: 0;
  padding: 2rem;
`;

const Wrapper = styled.div`
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background-color: #041330;
  text-align: center;
  color: #ffffff;
  height: 80px;
`;
const Button = styled.a`
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 9px 14px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  float: right;
  margin-right: 10px;
  :hover {
    background-color: #5cbf2a;
  }
  :active {
    top: 1px;
  }
`;

export { Container, ContainerView, ImageLogo, Wrapper, Button };
