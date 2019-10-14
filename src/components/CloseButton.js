import React from "react";
import styled from "styled-components";
import X from "./icons/X";

const Button = styled.button`
  background: rgb(255, 147, 135);
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 0px;
  cursor: pointer;
  width: 44px;
  height: 44px;

  display: flex;
  justify-content: center;
`;

const CloseIcon = styled(X)`
  height: 12.71px;
  width: 12.71px;
  margin: auto;
  fill: white;
`;

export default function CloseButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <CloseIcon />
    </Button>
  );
}
