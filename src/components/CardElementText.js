import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  height: 150px;
  width: 60%;
  justify-content: flex-end;
  margin-left: 10px;
`;

const StudioName = styled.h2`
  color: rgb(110, 94, 94);
  font-family: Arial, Helvetica, sans-serif;
`;

const MonthlyPrice = styled.span`
  color: rgb(110, 94, 94);
  font-family: Arial, Helvetica, sans-serif;
`;
const Adress = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(110, 94, 94);
`;

export default function CardElementText({ name, price, adress }) {
  return (
    <Wrapper>
      <StudioName>{name}FlexxFit am Büchel</StudioName>
      <MonthlyPrice>{`Preis Monatlich: ${price}€`}</MonthlyPrice>
      <Adress>{adress}Kürbisstraße 12, 52205 Köln</Adress>
    </Wrapper>
  );
}
