import React from "react";
import styled from "styled-components";
import { motion } from "../utils/animations";
// import { flicker, flickerAlter } from "../utils/animations";

const StyledH1 = styled.span`
  font-size: 60px;
  font-family: "Pacifico";
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00ceff, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px #00ceff;
  text-align: center;

  animation-iteration-count: 20;
`;
const StyledH2 = styled.span`
  font-size: 35px;
  font-family: "Roboto";
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00ceff, 0 0 30px #00ceff,
    0 0 20px #00ceff, 0 0 55px #00ceff;
  text-align: center;
  animation: ${motion} 10s ease-out infinite both;
  /* animation-iteration-count: 20; */
  animation-fill-mode: forwards;
  animation-delay: 7s;
  margin-right: 3px;
`;

const StyledH3 = styled.span`
  font-size: 60px;
  font-family: "Pacifico";
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00ceff, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px;
  text-align: center;
`;

const StyledDiv = styled.div`
  text-align: center;
  padding: 20px;
`;

const StyledH4 = styled.span`
  font-size: 35px;
  font-family: "Roboto";
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00ceff, 0 0 30px #00ceff,
    0 0 20px #00ceff, 0 0 55px #00ceff;
  text-align: center;
  animation: ${motion} 5s ease-out infinite both;
  /* animation-iteration-count: 20; */
  animation-fill-mode: forwards;
  animation-delay: 1s;
  margin-right: 3px;
`;

export default function Compfit() {
  return (
    <StyledDiv>
      <StyledH3>Comp</StyledH3>
      <StyledH1>Fit</StyledH1>
    </StyledDiv>
  );
}
export function Teaser() {
  return (
    <StyledDiv>
      <StyledH2>Find</StyledH2>
      <StyledH2>the</StyledH2>
      <StyledH2>Gym</StyledH2>
      <StyledH2>that</StyledH2>
      <StyledH2>fits</StyledH2>

      <br />
      <StyledH4>YOU</StyledH4>
    </StyledDiv>
  );
}
