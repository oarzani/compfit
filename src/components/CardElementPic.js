import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { studios } from "../api/studio";

const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin: 10px 20px;
  width: 150px;
`;
// height used to be 90vh before.
const StyledImageDiv = styled.img`
  height: 150px;
  /* object-fit: cover; */
  object-position: top center;
`;

const StyledLink = styled(Link)`
  color: #4ecbe0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12pt;
`;
//Show
export default function CardElementPic({
  studio,
  imageLogo,
  name,
  adress,
  strength,
  wellnes,
  courses,
  imageSource
}) {
  return (
    <PicWrapper>
      {/* Das DIv unten zum Image ändern, weil ja eine source weitergegeben wird */}
      <StyledImageDiv src={imageLogo} alt={name} />
      <StyledLink studio={studio} to={`/results/${name}`}>
        Details {studio}
      </StyledLink>
    </PicWrapper>
  );
}
