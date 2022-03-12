import React, { useState } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 50%;
  border-radius: 10px;
  font-family: "Vazir";
  box-shadow: 2px 5px 5px grey;
`;

const DropButton = styled.button`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 0px;
  text-decoration: none;
  font-size: 20px;
  width: 100%;
  cursor: initial;
  direction: rtl;
  background-color: white;
  border: 2px solid #152ab3;
  border-radius: 10px;
  :disabled {
    opacity: 0.4;
    border: 2px solid grey;
  }
`;

const DropDownContent = styled.div`
  position: absolute;
  background-color: white;
  margin-top: 0.5rem;
  width: 30%;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 11;
  border-radius: 10px;
  max-height: 13rem;
  overflow-y: scroll;
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  cursor: initial;
  font-size: 18px;
  &:hover {
    background-color: #152ab3;
    color: white;
    border-radius: 10px;
  }
`;

function DropDownMenu(props) {
  const [show, onShow] = useState(false);
  const { title, disabled, onClick, list, value } = props;

  return (
    <StyledUl>
      <DropButton disabled={disabled} onClick={() => onShow(!show)}>
        {title}: {value}
      </DropButton>
      {show ? (
        <DropDownContent>
          {list.map((item, index) => (
            <SubA
              key={index}
              onClick={() => {
                onShow(false);
                onClick(item);
              }}
            >
              {item.label}
            </SubA>
          ))}
        </DropDownContent>
      ) : null}
    </StyledUl>
  );
}
export default DropDownMenu;
