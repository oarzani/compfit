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

const StyledImageDiv = styled.div`
  height: 90vh;
`;

const Details = styled.p`
  color: #4ecbe0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8pt;
`;

export default function CardElementPic({ image, link }) {
  return (
    <PicWrapper>
      <StyledImageDiv>{image}</StyledImageDiv>
      <Details>{`Details ${link}`}</Details>
    </PicWrapper>
  );
}
