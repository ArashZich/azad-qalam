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
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 2rem;
  direction: rtl;
  border: 2px solid grey;
  border-radius: 10px;
  box-shadow: 2px 5px 5px grey;
`;

export default function Lorem(props) {
  const { list } = props;
  let unique = [...new Set(list)];

  return (
    <Container>
      {unique.map((item, ind) => {
        return (
          <Wrapper key={ind}>
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
