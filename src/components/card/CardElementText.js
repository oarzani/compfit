import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  height: 100%;
  width: 67%;
  align-items: stretch;
  /* justify-content: space-evenly; */
  margin-left: 10px;
  font-size: 16px;
`;

const StudioName = styled.h2`
  color: rgb(78, 203, 224);
  font-family: "Roboto", sans-serif;
  font-style: italic;
`;

const Information = styled.div`
  font-family: "Roboto", sans-serif;
  /* display: flex;
  justify-content: flex-end; */
  color: black;
  margin-bottom: 15px;
  background: transparent;
`;

const Adress = styled.div`
  font-family: "Roboto", sans-serif;
  color: black;
`;
const StyledList = styled.li`
  font-family: "Roboto", sans-serif;
`;

export default function CardElementText({ name, price, adress, contracts }) {
  return (
    <Wrapper>
      <StudioName>{name}</StudioName>

      <Information>
        <b>Membership(s)</b>
        <hr></hr>
        {contracts.map(contracts => {
          return <StyledList>{contracts}</StyledList>;
        })}
      </Information>

      <Adress>
        <b>{adress}</b>
      </Adress>
    </Wrapper>
  );
}
