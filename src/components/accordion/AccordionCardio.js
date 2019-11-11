import React, { useState } from "react";
import styled from "styled-components";
import OpenAccordion from "../icons/OpenAccordion";
import CheckSecond from "../icons/CheckSecond";

const AccordionWrapper = styled.div`
  width: 100%;
`;

export const AccordionDiv = styled.div`
  background: transparent;
  color: #4ecbe0;
  display: flex;
  justify-content: space-between;

  box-shadow: 2px 2px 5px rgb(112, 112, 112);
  align-items: center;
  font-size: 20pt;
  padding: 8px;
  font-family: "Roboto", sans-serif;
`;

const Content = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
`;
export const ListItem = styled.li`
  font-size: 16pt;
  font-family: "Roboto", sans-serif;
  /* font-style: italic; */
  color: rgb(110, 94, 94);
  margin-top: 3px;
`;

const Arrow = styled.div`
  align-self: right;
  transform: ${props => (props.show ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.2s;
  /* margin-left: 100px; */
`;
export const Check = styled(CheckSecond)`
  margin-left: 10px;
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
          <span></span>
          <Arrow show={toggleContent}>
            <OpenAccordion />
          </Arrow>
        </AccordionDiv>
        <Content show={toggleContent}>
          {cardio.map(cardio => {
            return (
              <ListItem>
                {cardio}
                <Check />
              </ListItem>
            );
          })}
        </Content>
      </AccordionWrapper>
    </>
  );
}
