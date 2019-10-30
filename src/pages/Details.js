import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AccordionCourses from "../components/AccordionComps/AccordionCourses";
import AccordionCardio from "../components/AccordionComps/AccordionCardio";
import AccordionStrength from "../components/AccordionComps/AccordionStrength";
import AccordionWellnes from "../components/AccordionComps/AccordionWellnes";
import { studios } from "../api/studio";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  min-height: 220px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;
const IframeWrapper = styled.div`
  display: flex;
  min-height: 220px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const OpeneningTimesDiv = styled.article`
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Line = styled.hr`
  color: grey;
  width: 80%;
`;
const Title = styled.h1`
  color: rgb(78, 203, 224);
`;

const Adress = styled.p``;
const StyledImage = styled.img`
  width: 100%;
`;

export default function Details({ match }) {
  const studio = studios.find(
    studio => studio.name === match.params.studioName
  );
  console.log(studio);
  return (
    <>
      <Header />
      <Main>
        <ImageWrapper>
          <StyledImage src={studio.imageSource} />
        </ImageWrapper>
        <Wrapper>
          <Title>{studio.name}</Title>
          <Adress>{studio.adress}</Adress>
          <Line />
        </Wrapper>
        <OpeneningTimesDiv>{studio.openingtime}</OpeneningTimesDiv>
        <AccordionCardio cardio={studio.cardio} />
        <AccordionCourses courses={studio.courses} />
        <AccordionStrength strength={studio.strength} />
        <AccordionWellnes wellnes={studio.wellnes} />
        <IframeWrapper name={studio.name} iFrameSource={studio.iFrameSource}>
          <iframe
            title={studio.name}
            src={studio.iFrameSource}
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </IframeWrapper>
      </Main>
    </>
  );
}
