import React from "react";
import styled from "styled-components";
import CardElementPic, { StyledLink } from "./CardElementPic";
import CardElementText from "./CardElementText";

const CardWrapper = styled.article`
  display: flex;

  width: 90%;
  margin: 10px;
  border-radius: 2em;
  border: 3px solid rgb(110, 94, 94);
  padding: 10px;
`;

//To-Do: Link property to Details
export default function CardComponent({ studio, props, name }) {
  return (
    <CardWrapper>
      <StyledLink studio={studio} to={`/gyms/${name}`} />
      <CardElementPic
        imageLogo={studio.imageLogo}
        name={studio.name}
        cardio={studio.cardio}
        adress={studio.adress}
      />
      <CardElementText
        name={studio.name}
        price={studio.price}
        duration={studio.duration}
        adress={studio.adress}
        contracts={studio.contracts}
      />
    </CardWrapper>
  );
}

// Proptypes: Object req.
