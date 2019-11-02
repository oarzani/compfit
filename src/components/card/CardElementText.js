import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  min-height: 150px;
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
  margin-top: 10px;
`;

const Duration = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(110, 94, 94);
  margin-top: 10px;
`;

const Adress = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(110, 94, 94);
  margin-top: 10px;
`;

export default function CardElementText({ name, price, adress, duration }) {
  return (
    <Wrapper>
      <StudioName>{name}</StudioName>
      <MonthlyPrice>{`Preis Monatlich: ${price} €`} </MonthlyPrice>
      <Duration>{`Vertragslaufzeit: ${duration} Monate`}</Duration>
      <Adress>{adress}</Adress>
    </Wrapper>
  );
}
