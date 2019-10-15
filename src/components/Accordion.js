import React, { useState } from "react";
import styled from "styled-components";
import OpenAccordion from "./icons/OpenAccordion";

const AccordionWrapper = styled.div`
  width: 100%;
  min-height: 43px;
`;

const AccordionDiv = styled.div`
  background: transparent;
  color: #4ecbe0;
  /* display: flex;
  justify-content: center; */
  text-align: center;
  height: 100%;
  /* min-height: 43px; */
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
  background: #fffcf1;
`;

const Arrow = styled.div`
  align-self: right;
  transform: ${props => (props.show ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.2s;
  /* margin-left: 100px; */
`;

export default function Accordion({ title, content }) {
  const [toggleContent, setToggleContent] = useState(false);

  console.log(toggleContent);
  function handleClick() {
    setToggleContent(!toggleContent);
  }
  return (
    <>
      <AccordionWrapper>
        <AccordionDiv onClick={handleClick}>
          {title} Kurse
          <Arrow show={toggleContent}>
            <OpenAccordion />
          </Arrow>
        </AccordionDiv>
        <Content show={toggleContent}>
          Mama macht guten Salat {content}
          <h1>Hallo</h1>
        </Content>
      </AccordionWrapper>
    </>
  );
}
