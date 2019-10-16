import React from "react";
import styled from "styled-components";
import CardElementPic from "./CardElementPic";
import CardElementText from "./CardElementText";

const Flexbox = styled.article`
  display: flex;
  background: white;
  width: fit-content;
  height: 175px;
  border-radius: 2em;
  border: 3px solid rgb(110, 94, 94);
`;

export default function CardComponent() {
  return (
    <>
      <Flexbox>
        <CardElementPic />
        <CardElementText />
      </Flexbox>
    </>
  );
}
