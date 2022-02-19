import React from "react";
import styled from "styled-components";
import { lorem } from "../config";

const TextStyle = styled.div`
  ${(props) =>
    props.fontFamily
      ? `font-family:${props.fontFamily}`
      : "font-family: Vazir"};
  color: ${(props) => props.color};
  ${(props) => (props.bold ? "font-weight: bold" : null)};
  text-align: ${(props) => props.align};
  padding-top: ${(props) => props.pt}px;
  padding-left: ${(props) => props.pleft}px;
  font-size: ${(props) => props.fs}px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-left: 10rem;
  padding-right: 10rem;
  direction: rtl;
`;

export default function Lorem(props) {
  const { list } = props;

  return (
    <Container>
      {list.map((item, ind) => {
        return (
          <Wrapper key={ind}>
            <TextStyle>{item}</TextStyle>
            <TextStyle fontFamily={item} align="justify">
              {lorem}
            </TextStyle>
          </Wrapper>
        );
      })}
    </Container>
  );
}

Lorem.defaultProps = {
  list: [""],
};
