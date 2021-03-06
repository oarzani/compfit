import React from "react";
import styled from "styled-components";
import CardComponent from "./card/CardComponent";
import PropTypes from "prop-types";

const List = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;
const NumberOfGyms = styled.h3`
  font-family: "Roboto" sans-serif;
  color: rgb(110, 94, 94);
  font-style: bold;
`;

export default function StudioList({ filteredStudios }) {
  return (
    <List>
      <NumberOfGyms>{filteredStudios.length} Results</NumberOfGyms>
      {filteredStudios.map(studio => {
        return <CardComponent studio={studio} />;
      })}
    </List>
  );
}
StudioList.propTypes = {
  filteredStudios: PropTypes.array
};
