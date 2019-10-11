import React from "react";
import styled, { css } from "styled-components";

const HeaderDiv = styled.header`
  height: 65px;
  background: rgb(78, 203, 224);
  width: 375px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  font-size: 26px;
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: "Pacifico", cursive;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Headline>CompFit</Headline>
    </HeaderDiv>
  );
}
