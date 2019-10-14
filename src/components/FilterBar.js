import React from "react";
import styled from "styled-components";
import Filter from "./icons/Filter";

const FitlerButton = styled.button`
  background: rgb(78, 203, 224);
  border-radius: 2em;
  border: none;
  display: flex;
  justify-content: center;
  width: 349px;
  height: 37px;
  cursor: pointer;
`;

const FilterIcon = styled(Filter)`
  margin: auto;
  fill: rgb(255, 255, 255);
`;

export default function FilterBar({ onClick }) {
  return (
    <FitlerButton onClick={onClick}>
      <FilterIcon />
    </FitlerButton>
  );
}
