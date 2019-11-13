import React, { useState } from "react";
import styled from "styled-components";
import OpenAccordion from "../icons/OpenAccordion";
import { ListItem, AccordionDiv, Check } from "./AccordionCardio";
import PropTypes from "prop-types";

const AccordionWrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  width: 100%;
  color: #0001ff;
`;

const Arrow = styled.div`
  align-self: right;
  transform: ${props => (props.show ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.2s;
`;

export default function AccordionWellnes({ wellnes }) {
  const [toggleContent, setToggleContent] = useState(false);

  console.log(toggleContent);
  function handleClick() {
    setToggleContent(!toggleContent);
  }
  return (
    <>
      <AccordionWrapper>
        <AccordionDiv onClick={handleClick}>
          Wellnes
          <span></span>
          <Arrow show={toggleContent}>
            <OpenAccordion />
          </Arrow>
        </AccordionDiv>
        <Content show={toggleContent}>
          {wellnes.map(wellnes => {
            return (
              <ListItem>
                {wellnes}
                <Check />
              </ListItem>
            );
          })}
        </Content>
      </AccordionWrapper>
    </>
  );
}
AccordionWellnes.propTypes = {
  wellnes: PropTypes.array,
  handleClick: PropTypes.func,
  toggleContent: PropTypes.bool,
  setToggleContent: PropTypes.func
};
