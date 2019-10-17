import React from "react";
import styled from "styled-components";
import Filter from "./icons/Filter";

const FitlerButton = styled.div`
  background: rgb(78, 203, 224);
  border-radius: 2em;
  border: none;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 37px;
  cursor: pointer;
  margin-top: 10px;
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
