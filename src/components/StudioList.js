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

export default function StudioList({ activeOptions }) {
  const filteredStudios = studios.filter(studio => {
    if (activeOptions.flexx) {
      if (studio.options.flexx === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.six) {
      if (studio.options.six === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.twelve) {
      if (studio.options.twelve === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.twentyfour) {
      if (studio.options.twentyfour === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.ladyarea) {
      if (studio.options.ladyarea === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.cardio) {
      if (studio.options.cardio === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.courses) {
      if (studio.options.courses === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.wellnes) {
      if (studio.options.wellnes === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.personaltraining) {
      if (studio.options.personaltraining === false) {
        return true;
      }
      return false;
    }
    if (activeOptions.strength) {
      if (studio.options.strength === false) {
        return true;
      }
      return false;
    }

    return false;
  });

  return (
    <List>
      {filteredStudios.map(studio => {
        return <CardComponent studio={studio} />;
      })}
    </List>
  );
}
