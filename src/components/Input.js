import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border: none;
  text-transform: capitalize;
  color: #fff;
  min-width: 90%;
  background: none;
  &::placeholder {
    color: #828387;
  }
  font-size: 24px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2d2e33;
  padding: 10px 30px;
  border-radius: 2.5rem;
  margin-top: 30px;
  height: 60px;
  width: 30rem;
`;
