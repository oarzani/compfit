import React from "react";
import styled from "styled-components";

const WrappSearchBar = styled.form`
  display: flex;
  flex-direction: row;
`;

const SearchBar = styled.input`
  background: #fff;
  width: 100%;
  /* min-height: 30px; */
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

export default function SearchCityBar({ onSearch, onClick }) {
  function handleInputChange(event) {
    const value = event.target.value;
    onSearch(value);
  }
  return (
    <WrappSearchBar>
      <SearchBar
        type="search"
        placeholder="Stadt eingeben..."
        onChange={handleInputChange}
      />

      <FindButton type="submit" onClick={onClick}>
        Go
      </FindButton>
    </WrappSearchBar>
  );
}
