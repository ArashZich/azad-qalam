import React, { useContext } from "react";
import styled from "styled-components";
import { lorem } from "../config";
import { AppContext } from "../store";
import _ from "lodash";

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
  font-weight: ${(props) => props.fw};
  padding: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin-top: 10px;
  margin-bottom: 3rem;
`;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  direction: rtl;
  border: 2px solid grey;
  border-radius: 10px;
  box-shadow: 2px 5px 5px grey;
  width: 100%;
  inline-size: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export default function Lorem(props) {
  const { list } = props;
  let unique = [...new Set(list)];
  const { states } = useContext(AppContext);
  const { fontWeight, fontSize, textValue } = states;

  return (
    <Container>
      {unique.map((item, ind) => {
        return (
          <Wrapper key={ind}>
            <TextStyle
              fontFamily={item}
              fs={fontSize}
              fw={fontWeight}
              fo
              align="justify"
            >
              {!_.isEmpty(textValue) ? textValue : lorem}
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
