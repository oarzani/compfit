import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SecondSearchbar } from "../components/SearchCityBarGrey";
import FilterBar from "../components/FilterBar";
import styled from "styled-components";
import StudioList from "../components/StudioList";
import { studios, getStudioByFilters } from "../api/studios";
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

const defaultOptions = {
  cardio: false,
  courses: false,
  ladyarea: false,
  strength: false,
  personaltraining: false,
  wellnes: false,
  flexx: false,
  six: false,
  twelve: false,
  twentyfour: false
};

export default function Results({ history }) {
  const [activeOptions, setActiveOptions] = React.useState(defaultOptions);
  const [filteredStudios, setFilteredStudios] = useState(studios);
  const [showModal, setShowModal] = React.useState(false);

  // Variante unten bezieht getStudioByFilters aus der api/Studios.js
  useEffect(() => {
    setFilteredStudios(getStudioByFilters(activeOptions));
  }, [activeOptions]);

  function handleOptionsChange(name, value) {
    let newOptions = { ...activeOptions };

    newOptions[name] = !value;

    setActiveOptions(newOptions);
    console.log(name, value);
  }

  console.log(history);

  return (
    <>
      {showModal && (
        <Modal
          activeOptions={activeOptions}
          onButtonClick={() => setShowModal(false)}
          badgeClick={handleOptionsChange}
        />
      )}
      <Header active={false} />

      <Main>
        <FilterSection>
          <SecondSearchbar />
          <FilterBar onClick={() => setShowModal(!showModal)} />
        </FilterSection>

        <StudioList activeOptions={activeOptions} studios={filteredStudios} />
      </Main>
    </>
  );
}
