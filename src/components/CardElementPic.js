import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin: 10px 20px;
  width: 40%;
`;
// height used to be 90vh before.
const StyledImageDiv = styled.div`
  height: 80%;
`;

const Details = styled.p`
  color: #4ecbe0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12pt;
`;

export default function CardElementPic({ imageLogo, link }) {
  return (
    <PicWrapper>
      <StyledImageDiv>{imageLogo}</StyledImageDiv>
      <Details>{`Details ${link}`}</Details>
    </PicWrapper>
  );
}
