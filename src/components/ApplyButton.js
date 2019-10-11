import React from "react";
import styled from "styled-components";
import Check from "./icons/Check";

const Button = styled.button`
  background: rgb(78, 203, 224);
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 0px;
  cursor: pointer;
  width: 61px;
  height: 61px;

  display: flex;
  justify-content: center;
`;

const CheckIcon = styled(Check)`
  height: 28px;
  width: 28px;
  margin: auto;
  fill: rgb(255, 255, 255);
`;

export default function ApplyButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <CheckIcon />
    </Button>
  );
}
