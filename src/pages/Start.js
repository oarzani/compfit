import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchCityBar from "../components/SearchCityBar";

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

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const Text = styled.h2`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24pt;
`;

const SearchBarWrapper = styled.div`
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
      <Header active={false} />
      <TextWrapper></TextWrapper>
      <SearchBarWrapper>
        <Text>
          Find the gym that fits <br />
          you
        </Text>
        <SearchCityBar />
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
