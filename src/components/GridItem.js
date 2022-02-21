import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 40px;
  border: 1px solid #152ab3;
  border-radius: 10px;
  font-size: 20px;
  &:hover {
    background-color: #152ab3;
    color: white;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  direction: rtl;
`;
const Container = styled.div`
  display: grid;
  align-items: center;
  max-height: 100%;
  height: 100%;
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
