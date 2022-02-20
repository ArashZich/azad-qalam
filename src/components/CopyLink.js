import React from "react";
import styled from "styled-components";
import { useCopyToClipboard } from "../hooks";

const Grid = styled.div`
  display: grid;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
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
  border-radius: 10px;
  border: 2px solid #152ab3;
  color: #152ab3;
  padding: 15px 10px;
  width: 20%;
  font-family: "Vazir";
  font-size: 20px;
  box-shadow: 2px 5px 5px grey;
`;

const Paper = styled.div`
  font-size: 20pt;
  margin: 10px;
  padding: 15px 10px;
  border: 2px solid #152ab3;
  border-radius: 10px;
  cursor: pointer;
  width: 60%;
  box-shadow: 2px 5px 5px grey;
`;

const CopyLink = (props) => {
  const { link } = props;
  const [copyUrlStatus, copyUrl] = useCopyToClipboard(link);

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <Paper>{link}</Paper>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <Button onClick={copyUrl}>
            {copyUrlStatus === "copied" ? "کپی شد" : "کپی"}
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default CopyLink;
