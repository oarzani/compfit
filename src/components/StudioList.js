import React from "react";
import styled from "styled-components";
import CardComponent from "./card/CardComponent";

const List = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;
const NumberOfGyms = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
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
