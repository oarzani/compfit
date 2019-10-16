import React from "react";
import styled from "styled-components";

const WrappSearchBar = styled.form`
  display: flex;
  width: 100%;
`;

const GreySearchbar = styled.input`
  background: #fffcf1;
  width: 100%;
  border-radius: 2em;
  height: 37px;

  font-size: 16pt;
  border: solid 3px rgb(110, 94, 94);
  padding-left: 10px;
`;

export function SecondSearchbar({ onChange }) {
  return (
    <WrappSearchBar>
      <GreySearchbar placeholder="type diffrent city..." onChange={onChange} />
    </WrappSearchBar>
  );
}
