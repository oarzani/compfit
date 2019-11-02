import React from "react";
import styled from "styled-components";
import CardElementPic from "./CardElementPic";
import CardElementText from "./CardElementText";

const CardWrapper = styled.article`
  margin-top: 10px;
  display: flex;
  background: white;
  width: 80%;
  min-height: 175px;
  border-radius: 2em;
  border: 3px solid rgb(110, 94, 94);
  padding: 10px;
  max-height: 200px;
`;

//To-Do: Link property to Details
export default function CardComponent({ studio }) {
  return (
    <CardWrapper>
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
      />
    </CardWrapper>
  );
}
// Proptypes: Object req.
