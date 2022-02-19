import React from "react";
import styled from "styled-components";
import { useCopyToClipboard } from "../hooks";

const Grid = styled.div`
  display: grid;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #152ab3;
  color: #152ab3;
  margin: 0 1em;
  padding: 0.4em 1em;
  width: 100px;
  font-family: "Vazir";
  font-size: medium;
`;

const Paper = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 100%;
  margin: 0 1em;
  padding: 0.4em 1em;
  border-radius: 10px;
`;

const CopyGrid = (props) => {
  const { link } = props;
  const [copyUrlStatus, copyUrl] = useCopyToClipboard(link);

  return (
    <Grid>
      <Row>
        <Col size={10}>
          <Paper>{link}</Paper>
        </Col>
        <Col size={2}>
          <Button onClick={copyUrl}>
            {copyUrlStatus === "copied" ? "کپی شد" : "کپی"}
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default CopyGrid;
