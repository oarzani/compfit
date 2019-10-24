import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";
import ApplyButton from "./ApplyButton";
import PropTypes from "prop-types";
import DurationBar from "./DurationBar";
import RangeBar from "./RangeBar";
import Badge from "./Badge";
import { StudioOptions, NeighbourhoodOptions } from "../api/filters";
import { studios } from "../api/Studios";

const Container = styled.div`
  background: white;
  border-radius: 10px;
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 60px 10px;
  width: calc(100% - 52px);
  margin: 40px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

const ClosingDiv = styled.div`
  position: absolute;
  right: -10px;
  top: -22px;
`;
const SubmitButton = styled.div`
  position: absolute;
  left: calc(50% - 22px);
  bottom: -20px;
`;
const Backdrop = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: #6f6f6fde;
  z-index: 10;
`;

const BadgeContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h4`
  color: grey;
  font-family: Arial, Helvetica, sans-serif;
  align-self: left;
`;

const Line = styled.hr`
  color: grey;
  width: 80%;
`;

export default function Modal({
  children,
  show = true,
  hideBackdrop,
  handleClickEvent,
  activeOptions,
  setActiveOptions,
  badgeClick
}) {
  // function handleClickOnBadge ()

  const badgeKeys = Object.keys(activeOptions);

  return (
    <>
      <Container show={show}>
        <Title>Choose Contract Duration</Title>
        <DurationBar />
        <Title>Choose Price</Title>
        <RangeBar />
        <Line />
        <Title>Select Folowing</Title>
        <BadgeContainer>
          <Badge
            name={badgeKeys[0]}
            active={activeOptions[badgeKeys[0]]}
            badgeClick={badgeClick}
          ></Badge>
          <Badge
            name={badgeKeys[1]}
            active={activeOptions[badgeKeys[1]]}
            badgeClick={badgeClick}
          />

          <Badge
            name={badgeKeys[2]}
            active={activeOptions[badgeKeys[2]]}
            badgeClick={badgeClick}
          />

          <Badge
            name={badgeKeys[3]}
            active={activeOptions[badgeKeys[3]]}
            badgeClick={badgeClick}
          />

          {/* <Badge
            key={strength}
            active={activeOptions[strength]}
            onClick={() =>
              setActiveOptions({
                ...activeOptions,
                [strength]: !activeOptions[strength]
              })
            }
          >
            Strength
          </Badge>
          <Badge
            key={wellness}
            active={activeOptions[wellness]}
            onClick={() =>
              setActiveOptions({
                ...activeOptions,
                [wellness]: !activeOptions[wellness]
              })
            }
          >
            Wellness
          </Badge> */}
          {/* {StudioOptions.map(option => {
            return (
              <Badge
                key={option}
                active={!!activeOptions[option]}
                onClick={() =>
                  setActiveOptions({
                    ...activeOptions,
                    [option]: !activeOptions[option]
                  })
                }
              >
                {option}
              </Badge>
            );
          })} */}
        </BadgeContainer>
        <Line />
        <Title>Select Neighborhood(s)</Title>
        {/* <BadgeContainer>
          {NeighbourhoodOptions.map(option => {
            return (
              <Badge
                key={option}
                active={!!activeOptions[option]}
                onClick={() =>
                  setActiveOptions({
                    ...activeOptions,
                    [option]: !activeOptions[option]
                  })
                }
              >
                {option}
              </Badge>
            );
          })}
        </BadgeContainer> */}
        <ClosingDiv>
          <CloseButton onClick={handleClickEvent} />
        </ClosingDiv>
        <SubmitButton>
          <ApplyButton onClick={handleClickEvent} />
        </SubmitButton>
      </Container>
      {!hideBackdrop && <Backdrop onClick={handleClickEvent} show={show} />}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  hideBackdrop: PropTypes.bool,
  onShow: PropTypes.func,
  onAccept: PropTypes.func,
  onClose: PropTypes.func
};
