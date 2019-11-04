import React, { useState } from "react";
import styled from "styled-components";
import OpenAccordion from "../icons/OpenAccordion";
import { ListItem } from "./AccordionCardio";
import CheckSecond from "../icons/CheckSecond";

const AccordionWrapper = styled.div`
  width: 100%;
`;

const AccordionDiv = styled.div`
  background: transparent;
  color: #4ecbe0;
  /* display: flex;
  justify-content: center; */
  text-align: center;

  box-shadow: 2px 2px 5px rgb(112, 112, 112);
  /* align-items: center; */
  font-size: 16pt;
  padding: 4px;
  font-family: Arial;
`;

const Content = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  width: 100%;
  color: #707070;
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
          <Arrow show={toggleContent}>
            <OpenAccordion />
          </Arrow>
        </AccordionDiv>
        <Content show={toggleContent}>
          {wellnes.map(wellnes => {
            return <ListItem>{wellnes}</ListItem>;
          })}
        </Content>
      </AccordionWrapper>
    </>
  );
}
