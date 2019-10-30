import React, { useState } from "react";
import styled from "styled-components";
import OpenAccordion from "../icons/OpenAccordion";
import { studios } from "../../api/studio";

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
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  color: #707070;
`;
const ListItem = styled.li``;

const Arrow = styled.div`
  align-self: right;
  transform: ${props => (props.show ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.2s;
  /* margin-left: 100px; */
`;

export default function AccordionCardio({ cardio }) {
  const [toggleContent, setToggleContent] = useState(false);

  console.log(toggleContent);
  console.log(cardio);
  function handleClick() {
    setToggleContent(!toggleContent);
  }
  return (
    <>
      <AccordionWrapper>
        <AccordionDiv onClick={handleClick}>
          Cardio
          <Arrow show={toggleContent}>
            <OpenAccordion />
          </Arrow>
        </AccordionDiv>
        <Content show={toggleContent}>
          {cardio.map(cardio => {
            return <ListItem>{cardio}</ListItem>;
          })}
        </Content>
      </AccordionWrapper>
    </>
  );
}
