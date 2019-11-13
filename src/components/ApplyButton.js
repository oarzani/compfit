import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CheckSecond from "./icons/CheckSecond";

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

const CheckIcon = styled(CheckSecond)`
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
ApplyButton.propTypes = {
  onClick: PropTypes.func
};
