import React from "react";
import styled from "styled-components";
import CheckSecond from "./icons/CheckSecond";

const DoesMeet = styled(CheckSecond)`
  fill: #6be895;
`;

export default function MeetIcon() {
  return <DoesMeet />;
}
