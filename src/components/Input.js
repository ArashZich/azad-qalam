import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  outline: none;
  border: none;
  color: black;
  background: none;
  font-family: "Vazir";
  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  font-size: 22px;
  width: 100%;
  text-align: right;
  padding: 0px 10px;
  direction: rtl;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #152ab3;
  border-radius: 10px;
  margin-top: 30px;
  height: 60px;
  width: 60%;
  box-shadow: 2px 5px 5px grey;
`;

const Input = (props) => {
  const { value, onChange } = props;
  return (
    <SearchInput>
      <InputStyle
        placeholder="یک متن دلخواه بنویسید ..."
        onChange={onChange}
        value={value}
      />
    </SearchInput>
  );
};

export default Input;
