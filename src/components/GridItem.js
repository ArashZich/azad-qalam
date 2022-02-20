import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 4vh;
  border: 1px solid #152ab3;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #152ab3;
    color: white;
    border-radius: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
  direction: rtl;
`;
const Container = styled.div`
  padding-top: 5rem;
`;

function GridItem(props) {
  const { t } = useTranslation("Fonts");
  const { list, onClick } = props;

  return (
    <Container>
      <Grid>
        {list.map((item) => (
          <Item
            key={Math.random()}
            onClick={() => onClick(item.families, item.label)}
          >
            {t(`${item.label}`)}
          </Item>
        ))}
      </Grid>
    </Container>
  );
}

export default GridItem;
