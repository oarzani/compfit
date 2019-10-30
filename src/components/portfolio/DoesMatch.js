import React from "react";
import styled from "styled-components";
import CheckSecond from "../icons/CheckSecond";

const DoesMatch = styled(CheckSecond)`
  fill: #6be895;
`;

export default function MatchIcon() {
  return <DoesMatch />;
}
