import React from "react";
import styled from "styled-components";
import X from "../icons/X";

const DoesNotMeetIcon = styled(X)`
  fill: rgb(255, 147, 135);
`;
export default function NotMeetIcon() {
  return <DoesNotMeetIcon />;
}
