import styled from "styled-components";

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
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-top: 20px;
`;

export { Item, Grid };
