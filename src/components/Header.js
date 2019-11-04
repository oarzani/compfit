import React from "react";
import styled, { css } from "styled-components";
import BackInWhite from "./icons/BackInWhite";
import { Link } from "react-router-dom";

const HeaderDiv = styled.header`
  height: 65px;
  background: rgb(78, 203, 224);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 95%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Headline = styled.h1`
  font-size: 26px;
  color: rgb(255, 255, 255);

  font-family: "Pacifico", cursive;
`;

const StyledBackInWhite = styled(BackInWhite)`
  margin-left: 20px;
`;
export const StyledLink = styled(Link)``;
export default function Header({ showBack = true }) {
  return (
    <HeaderDiv>
      <HeaderWrapper>
        {showBack && (
          <StyledLink to="/gyms">
            <StyledBackInWhite />
          </StyledLink>
        )}
        {!showBack && <span></span>}
        <Headline>CompFit</Headline>
        <span></span>
      </HeaderWrapper>
    </HeaderDiv>
  );
}
