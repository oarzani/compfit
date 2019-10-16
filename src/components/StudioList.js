import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";

const List = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

// Mapping happens in this file//
export default function StudioList() {
  return (
    <List>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </List>
  );
}
