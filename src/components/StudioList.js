import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import { studios } from "../api/Studios";

const List = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;
const NumberOfResults = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
`;

export default function StudioList({ activeOptions }) {
  const filteredStudios = studios.filter(studio => {
    if (activeOptions.flexx) {
      if (studio.options.flexx === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.six) {
      if (studio.options.six === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.twelve) {
      if (studio.options.twelve === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.twentyfour) {
      if (studio.options.twentyfour === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.ladyarea) {
      if (studio.options.ladyarea === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.cardio) {
      if (studio.options.cardio === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.courses) {
      if (studio.options.courses === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.wellnes) {
      if (studio.options.wellnes === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.personaltraining) {
      if (studio.options.personaltraining === true) {
        return true;
      }
      return false;
    }
    if (activeOptions.strength) {
      if (studio.options.strength === true) {
        return true;
      }
      return false;
    }

    return false;
  });

  return (
    <List>
      <NumberOfResults>Results {filteredStudios.length}</NumberOfResults>
      {filteredStudios.map(studio => {
        return <CardComponent studio={studio} />;
      })}
    </List>
  );
}
