import React from "react";
import styled from "styled-components";

const GreySearchbar = styled.input`
  background: #fffcf1;
  width: 100%;
  border-radius: 2em;
  height: 37px;
  min-width: 349px;
  border: solid 3px rgb(110, 94, 94);
`;

export function SecondSearchbar({ onChange }) {
  return <GreySearchbar onChange={onChange} />;
}
