import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AccordionCourses from "../components/AccordionComps/AccordionCourses";
import AccordionCardio from "../components/AccordionComps/AccordionCardio";
import AccordionStrength from "../components/AccordionComps/AccordionStrength";
import AccordionWellnes from "../components/AccordionComps/AccordionWellnes";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
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

const OpeneningTimesDiv = styled.article``;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Line = styled.hr`
  color: grey;
  width: 80%;
`;
const Title = styled.h2``;

const Adress = styled.p``;
const StyledImage = styled.img`
  width: 100%;
  min-height: 350px;
  object-fit: cover;
  object-position: top center;
`;

export default function Details({
  name,
  iFrameSource,
  imageSource,
  adress,
  cardio,
  courses,
  strength,
  wellnes,
  match
}) {
  // const studio = studios.find(
  //   studio => studio.name === match.params.studioName
  // );
  return (
    <>
      <Header />
      <Main>
        <ImageWrapper>
          <StyledImage src={imageSource} />
        </ImageWrapper>
        <Wrapper>
          <Title>{name}</Title>
          <Adress>{adress}</Adress>
          <Line />
        </Wrapper>
        <OpeneningTimesDiv />
        <AccordionCardio cardio={cardio} />
        <AccordionCourses />
        <AccordionStrength />
        <AccordionWellnes />
        {/* <IframeWrapper>
          <iframe
            title={name}
            src={iFrameSource}
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </IframeWrapper> */}
      </Main>
    </>
  );
}
