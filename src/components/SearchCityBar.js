import React from "react";
import styled from "styled-components";

const WrappSearchBar = styled.form`
  display: flex;
  flex-direction: row;
`;

const SearchBar = styled.input`
  background: #fff;
  width: 100%;
  height: 37px;
  min-width: 349px;
  font-size: 16pt;

  padding-left: 10px;
  flex-grow: 2;
  padding: 2px;
`;

const FindButton = styled.button`
  background: #4ecbe0;
  max-width: fit-content;
  color: #fff;
  font-size: 16pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  min-width: 80px;
`;

export default function StartSearch({ onClick }) {
  return (
    <WrappSearchBar>
      <SearchBar />

      <FindButton type="submit" onClick={onClick}>
        Go
      </FindButton>
    </WrappSearchBar>
  );
}
