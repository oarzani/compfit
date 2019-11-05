import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import GoButton from "../components/GoButton";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;
  position: relative;
`;

const PictureWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Text = styled.h2`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24pt;
  text-shadow: 2px 2px 4px #000000;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  align-items: center;
  position: fixed;
  justify-content: center;
  width: 60%;
  top: 20%;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100%;
  min-height: 350px;
  object-fit: cover;
  object-position: top center;
`;

export default function Start() {
  return (
    <Main>
      <Header showBack={false} />

      <SearchBarWrapper>
        <Text>
          Find the gym that fits <br />
          you
        </Text>
        <GoButton />
      </SearchBarWrapper>
      <PictureWrapper>
        <StyledImage src="/pics/Gym1.jpeg" alt="" />
      </PictureWrapper>
      <PictureWrapper>
        <StyledImage src="/pics/Yoga.jpeg" alt="" />
      </PictureWrapper>
    </Main>
  );
}
