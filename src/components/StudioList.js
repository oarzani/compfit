import React from "react";
import styled from "styled-components";
import CardComponent from "./card/CardComponent";
// import { studios } from "../api/studio";

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

export default function StudioList({ studios }) {
  // const filteredStudios = studios.filter(studio => {
  //   if (filters.flexx) {
  //     if (studio.options.flexx === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.six) {
  //     if (studio.options.six === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.twelve) {
  //     if (studio.options.twelve === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.twentyfour) {
  //     if (studio.options.twentyfour === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.ladyarea) {
  //     if (studio.options.ladyarea === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.cardio) {
  //     if (studio.options.cardio === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.courses) {
  //     if (studio.options.courses === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.wellnes) {
  //     if (studio.options.wellnes === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.personaltraining) {
  //     if (studio.options.personaltraining === true) {
  //       return true;
  //     }
  //     return false;
  //   }
  //   if (filters.strength) {
  //     if (studio.options.strength === true) {
  //       return true;
  //     }
  //     return false;
  //   }

  //   return false;
  // });

  //Aus Studios werden filtered studios

  return (
    <List>
      <NumberOfGyms>Results {studios.length}</NumberOfGyms>
      {studios.map(studio => {
        return <CardComponent studio={studio} />;
      })}
    </List>
  );
}
