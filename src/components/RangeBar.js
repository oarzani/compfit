import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 50px;
  padding: 20px;
`;

export default function RangeBar() {
  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(event) {
    // console.log(event);
    setSelectedValue(event);
  }

  return (
    <Wrapper>
      <InputRange
        formatLabel={selectedValue => `${selectedValue} €`}
        maxValue={80}
        minValue={0}
        value={selectedValue}
        onChange={handleChange}
      />
    </Wrapper>
  );
}
