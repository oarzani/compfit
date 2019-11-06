import React from "react";
import styled from "styled-components";
import { StyledLink } from "./Header";

const WrappSearchBar = styled.form`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  background: #4ecbe0;

  color: #fff;
  font-size: 16pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 100px;
  height: 50px;
`;

export default function GoButton({ onClick }) {
  return (
    <WrappSearchBar>
      <StyledLink to="/gyms">
        <StyledButton type="submit" onClick={onClick}>
          Go
        </StyledButton>
      </StyledLink>
    </WrappSearchBar>
  );
}
