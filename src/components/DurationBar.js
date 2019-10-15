import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 80%;
  height: 6 0px;
  padding: 20px;
  margin: 20px;
`;
export default function DurationBar() {
  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(event) {
    setSelectedValue(event);
  }
  return (
    <Wrapper>
      <InputRange
        formatLabel={selectedValue => `${selectedValue} Months`}
        maxValue={48}
        minValue={0}
        value={selectedValue}
        onChange={handleChange}
      />
    </Wrapper>
  );
}
