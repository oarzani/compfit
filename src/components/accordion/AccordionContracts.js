import React, { useState } from "react";
import styled from "styled-components";
import OpenAccordion from "../icons/OpenAccordion";
import { ListItem, AccordionDiv } from "./AccordionCardio";

const AccordionWrapper = styled.div`
  width: 100%;
  /* min-height: 43px; */
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
  /* margin-left: 100px; */
`;

export default function AccordionContracts({ contracts }) {
  const [toggleContent, setToggleContent] = useState(false);

  console.log(toggleContent);
  function handleClick() {
    setToggleContent(!toggleContent);
  }
  return (
    <>
      <AccordionWrapper>
        <AccordionDiv onClick={handleClick}>
          Membership(s)
          <Arrow show={toggleContent}>
            <OpenAccordion />
          </Arrow>
        </AccordionDiv>
        <Content show={toggleContent}>
          {contracts.map(contracts => {
            return <ListItem>{contracts}</ListItem>;
          })}
        </Content>
      </AccordionWrapper>
    </>
  );
}
