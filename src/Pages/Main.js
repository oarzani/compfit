import React from "react";
import Header from "../components/Header";
import { SecondSearchbar } from "../components/SearchCityBarGrey";
import FilterBar from "../components/FilterBar";
import styled from "styled-components";
import StudioList from "../components/StudioList";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;
  position: relative;
`;

const FilterSection = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  align-items: center;
  margin-bottom: 10px;
`;

export default function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <FilterSection>
          <SecondSearchbar />
          <FilterBar />
        </FilterSection>
        <StudioList />
      </Main>
    </>
  );
}
