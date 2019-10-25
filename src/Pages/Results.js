import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SecondSearchbar } from "../components/SearchCityBarGrey";
import FilterBar from "../components/FilterBar";
import styled from "styled-components";
import StudioList from "../components/StudioList";
import getStudioByFilters, { studios } from "../api/Studios";
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

const NumberOfResults = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Results() {
  // Suche:
  // const [search, setSearch] = useState("");
  // const FilteredByCity = studios.filter(studio =>
  //   studio.city.toLowerCase().includes(search.toLowerCase())
  // );
  // function handleSearchCity(value) {
  //   setSearch(value);
  // }

  const [activeOptions, setActiveOptions] = React.useState({
    cardio: false,
    courses: false,
    ladyarea: false,
    strength: false,
    personaltraining: false,
    wellness: false
  });

  const [filteredStudios, setFilteredStudios] = useState(studios);

  useEffect(() => {
    setFilteredStudios(getStudioByFilters(activeOptions));
  }, [activeOptions]);

  function handleOptionsChange(name, value) {
    let newOptions = { ...activeOptions };

    newOptions[name] = !value;

    setActiveOptions(newOptions);
    console.log(name, value);
  }

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {showModal && (
        <Modal
          activeOptions={activeOptions}
          setActiveOptions={setActiveOptions}
          handleClickEvent={() => setShowModal(false)}
          badgeClick={handleOptionsChange}
        />
      )}
      <Header active={false} />

      <Main>
        <FilterSection>
          <SecondSearchbar
          // onChange={event => handleInputChange(event.target.value)}
          // handleInputChange={setSearch}
          // onSearch={handleSearchCity}
          />
          <FilterBar onClick={() => setShowModal(!showModal)} />
        </FilterSection>
        <NumberOfResults>Results {filteredStudios.length}</NumberOfResults>

        <StudioList studios={filteredStudios} />
      </Main>
    </>
  );
}
