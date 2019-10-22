import React from "react";
import Header from "../components/Header";
import { SecondSearchbar } from "../components/SearchCityBarGrey";
import FilterBar from "../components/FilterBar";
import styled from "styled-components";
import StudioList from "../components/StudioList";
import { studios } from "../api/studios";
import Modal from "../components/Modal";

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

export default function MainPage({ studio }) {
  // To-Do: State der besteht aus filteredStudios setFilteredStudios
  const [filteredStudios, setFilteredStudios] = React.useState(studios);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {showModal && <Modal handleClickEvent={() => setShowModal(false)} />}
      <Header />

      <Main>
        <FilterSection>
          <SecondSearchbar />
          <FilterBar onClick={() => setShowModal(!showModal)} />
        </FilterSection>
        <StudioList studios={filteredStudios} />
        {/* In das Studio List filteredStudios={filteredStudios} */}
      </Main>
    </>
  );
}
