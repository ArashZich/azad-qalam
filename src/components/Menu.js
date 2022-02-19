import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  margin-top: 20px;
  font-family: "Vazir";
  background: #f0f0f0;
`;

const DropDownContainer = styled("div")`
  width: 20rem;
  margin: 0 auto;
  font-family: "Vazir";
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 10px 0px;
  font-weight: 500;
  font-size: 1.3rem;
  color: #152ab3;
  font-family: "Vazir";
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 20rem;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #152ab3;
  font-size: 1rem;
  font-weight: 300;
  overflow-y: scroll;
  height: 40vh;
  cursor: pointer;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

export default function Menu(props) {
  const { selectList, setValue } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => {
    setSelectedOption(value.label);
    setValue(value.families, value.label);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "فونت‌ها"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {selectList.map((option) => (
                <ListItem
                  onClick={() => onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option.label}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
