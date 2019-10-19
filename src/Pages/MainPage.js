import React from "react";
import Header from "../components/Header";
import { SecondSearchbar } from "../components/SearchCityBarGrey";
import FilterBar from "../components/FilterBar";
import styled from "styled-components";
import StudioList from "../components/StudioList";
import { studios } from "../api/Studios";

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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  align-items: center;
  margin-bottom: 10px;
`;

export default function MainPage({}) {
  // To-Do: State der besteht aus filteredStudios setFilteredStudios
  const [filteredStudios, setFilteredStudios] = React.useState(studios);
  return (
    <>
      <Header />

      <Main>
        <FilterSection>
          <SecondSearchbar />
          <FilterBar />
        </FilterSection>
        <StudioList studios={filteredStudios} />
        {/* In das Studio List filteredStudios={filteredStudios} */}
      </Main>
    </>
  );
}
