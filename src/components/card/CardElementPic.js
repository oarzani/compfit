import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin-right: 10px;
  width: 33%;
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
//Show
export default function CardElementPic({ studio, imageLogo, name }) {
  return (
    <PicWrapper>
      <StyledImageDiv src={imageLogo} alt={name} />
      <StyledLink studio={studio} to={`/gyms/${name}`}>
        Details {studio}
      </StyledLink>
    </PicWrapper>
  );
}
