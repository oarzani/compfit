import React from "react";
import styled from "styled-components";
import X from "./icons/X";

const DoesNotMatchIcon = styled(X)`
  fill: rgb(255, 147, 135);
`;
export default function NotMatchIcon() {
  return <DoesNotMatchIcon />;
}
