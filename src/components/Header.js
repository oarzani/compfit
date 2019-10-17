import React from "react";
import styled, { css } from "styled-components";
import BackInWhite from "./icons/BackInWhite";

const HeaderDiv = styled.header`
  height: 65px;
  background: rgb(78, 203, 224);
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  font-size: 26px;
  color: rgb(255, 255, 255);

  font-family: "Pacifico", cursive;
`;

const StyledBackInWhite = styled(BackInWhite)`
  justify-self: left;
`;
export default function Header({ active = true }) {
  return (
    <HeaderDiv>
      {active && <StyledBackInWhite />}
      <Headline>CompFit</Headline>
    </HeaderDiv>
  );
}
