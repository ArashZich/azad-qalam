import React from "react";
import styled from "styled-components";

const TextStyle = styled.div`
  font-family: "Vazir";
  color: ${(props) => props.color};
  ${(props) => (props.bold ? "font-weight: bold" : null)};
  text-align: ${(props) => props.align};
  padding-top: ${(props) => props.pt}px;
  padding-left: ${(props) => props.pleft}px;
  font-size: ${(props) => props.fs}px;
`;

const Text = ({
  bold = false,
  color = "black",
  align,
  pt,
  pleft,
  fs,
  children,
}) => {
  return (
    <TextStyle
      bold={bold}
      color={color}
      align={align}
      pt={pt}
      pleft={pleft}
      fs={fs}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
