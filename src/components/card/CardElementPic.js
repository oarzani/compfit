import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin-right: 10px;
  width: 30%;
  max-width: 240px;
`;

const StyledImageDiv = styled.img`
  height: 150px;

  max-width: 100%;

  object-position: top center;
`;

export const StyledLink = styled(Link)`
  color: #4ecbe0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12pt;
`;

const StyledLine = styled.hr`
  color: grey;
  margin: auto;
`;

export default function CardElementPic({ studio, imageLogo, name }) {
  return (
    <PicWrapper>
      <StyledImageDiv src={imageLogo} alt={name} />
      <StyledLine />
      <StyledLink studio={studio} to={`/gyms/${name}`}>
        Details {studio}
      </StyledLink>
    </PicWrapper>
  );
}
CardElementPic.propTypes = {
  studio: PropTypes.object,
  imageLogo: PropTypes.string,
  name: PropTypes.string
};
