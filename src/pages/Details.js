import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AccordionCourses from "../components/accordion/AccordionCourses";
import AccordionCardio from "../components/accordion/AccordionCardio";
import AccordionStrength from "../components/accordion/AccordionStrength";
import AccordionWellnes from "../components/accordion/AccordionWellnes";
import PropTypes from "prop-types";
import AccordionContracts from "../components/accordion/AccordionContracts";
import { getStudios } from "../getStudioByFilters";

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
  color: rgb(110, 94, 94);
  font-size: 16pt;
  font-style: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;
  font-style: italic;
  margin-top: 8px;
`;

const Adress = styled.a`
  margin: 2px;
  color: rgb(110, 94, 94);
  font-size: 16pt;
  font-style: "Roboto", sans-serif;
`;
const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  /* object-position: top center; */
`;

const StlyedIframe = styled.iframe`
  width: 100%;
  height: 450px;
`;

export default function Details({ match }) {
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const studios = await getStudios();
      setStudios(studios);
    }
    fetchData();
  }, []);

  const studio = studios.find(
    studio => studio.name === match.params.studioName
  );
  console.log(studios, studio);
  return (
    <>
      <Header />
      {studio && (
        <Main>
          <ImageWrapper>
            <StyledImage src={studio.imageSource} />
          </ImageWrapper>
          <Wrapper>
            <Title>{studio.name}</Title>

            <Adress href={studio.website}>Website</Adress>
            <Line />
          </Wrapper>
          <OpeneningTimesDiv>{studio.openingtime}</OpeneningTimesDiv>
          <AccordionContracts contracts={studio.contracts} />
          <AccordionCardio cardio={studio.cardio} />
          <AccordionCourses courses={studio.courses} />
          <AccordionStrength strength={studio.strength} />
          <AccordionWellnes wellnes={studio.wellnes} />

          <IframeWrapper name={studio.name} iFrameSource={studio.iFrameSource}>
            <StlyedIframe title={studio.name} src={studio.iFrameSource} />
          </IframeWrapper>
        </Main>
      )}
    </>
  );
}

Details.propTypes = {
  iFrameSource: PropTypes.string,
  website: PropTypes.string,
  studio: PropTypes.object,
  openingtime: PropTypes.string
};
