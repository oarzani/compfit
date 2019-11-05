import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import FilterBar from "../components/FilterBar";
import styled from "styled-components";
import StudioList from "../components/StudioList";
import { studios } from "../api/studio";
import Modal from "../components/Modal";
import { getStudioByFilters } from "../getStudioByFilters";

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

const defaultFilters = {
  cardio: false,
  courses: false,
  ladyarea: false,
  strength: false,
  personaltraining: false,
  wellnes: false,
  flexx: false,
  six: false,
  twelve: false,
  twentyfour: false,
  minPrice: 100
};

export default function Gyms({ history }) {
  const [filters, setFilters] = React.useState(defaultFilters);
  const [filteredStudios, setFilteredStudios] = useState(studios);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    setFilteredStudios(getStudioByFilters(filters));
  }, [filters]);

  function handleOptionsChange(name, value) {
    let newFilters = { ...filters };

    newFilters[name] = !value;

    setFilters(newFilters);
    console.log(name, value);
  }

  console.log(history);

  return (
    <>
      {showModal && (
        <Modal
          filters={filters}
          setFilters={setFilters}
          onButtonClick={() => setShowModal(false)}
          onBadgeClick={handleOptionsChange}
        />
      )}
      <Header showBack={false} />

      <Main>
        <FilterSection>
          <FilterBar onClick={() => setShowModal(!showModal)} />
        </FilterSection>

        <StudioList filters={filters} studios={filteredStudios} />
      </Main>
    </>
  );
}
