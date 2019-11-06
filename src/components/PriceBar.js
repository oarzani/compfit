import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 50px;
  padding: 20px;
`;

export default function PriceBar({ value, onPriceChange }) {
  return (
    <Wrapper>
      <InputRange
        formatLabel={value => `${value} €`}
        maxValue={90}
        minValue={0}
        value={value}
        onChange={onPriceChange}
      />
    </Wrapper>
  );
}
