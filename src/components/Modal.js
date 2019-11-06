import React from "react";
import styled from "styled-components";
import ApplyButton from "./ApplyButton";
import PropTypes from "prop-types";
import Badge from "./Badge";
import BadgeDuration from "./BadgeDuration";
import PriceBar from "./PriceBar";

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

const SubmitButton = styled.div`
  position: absolute;
  left: calc(50% - 22px);
  bottom: -20px;
  cursor: pointer;
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
  text-align: center;
`;

export const Line = styled.hr`
  color: grey;
  width: 80%;
`;

export default function Modal({
  show = true,
  hideBackdrop,
  filters,
  onPriceChange,
  onButtonClick,
  onBadgeClick
}) {
  const badgeKeys = Object.keys(filters);

  return (
    <>
      <Container show={show}>
        <Title>
          Choose Contract Duration <br />
          (Months)
        </Title>
        {/* <DurationBar /> */}
        <BadgeContainer>
          <BadgeDuration
            name={badgeKeys[6]}
            active={filters[badgeKeys[6]]}
            onBadgeClick={onBadgeClick}
          />
          <BadgeDuration
            name={badgeKeys[7]}
            active={filters[badgeKeys[7]]}
            onBadgeClick={onBadgeClick}
          />
          <BadgeDuration
            name={badgeKeys[8]}
            active={filters[badgeKeys[8]]}
            onBadgeClick={onBadgeClick}
          />
          <BadgeDuration
            name={badgeKeys[9]}
            active={filters[badgeKeys[9]]}
            onBadgeClick={onBadgeClick}
          />
        </BadgeContainer>
        <Title>Choose Price-Limit</Title>
        <PriceBar
          value={filters.price}
          onChange={value => console.log(value)}
          onPriceChange={onPriceChange}
        />
        <Line />
        <Title>Select Folowing</Title>
        <BadgeContainer>
          <Badge
            name={badgeKeys[0]}
            active={filters[badgeKeys[0]]}
            onBadgeClick={onBadgeClick}
          ></Badge>
          <Badge
            name={badgeKeys[1]}
            active={filters[badgeKeys[1]]}
            onBadgeClick={onBadgeClick}
          />

          <Badge
            name={badgeKeys[2]}
            active={filters[badgeKeys[2]]}
            onBadgeClick={onBadgeClick}
          />

          <Badge
            name={badgeKeys[3]}
            active={filters[badgeKeys[3]]}
            onBadgeClick={onBadgeClick}
          />

          <Badge
            name={badgeKeys[4]}
            active={filters[badgeKeys[4]]}
            onBadgeClick={onBadgeClick}
          />

          <Badge
            name={badgeKeys[5]}
            active={filters[badgeKeys[5]]}
            onBadgeClick={onBadgeClick}
          />
        </BadgeContainer>
        <Line />

        <SubmitButton>
          <ApplyButton onClick={onButtonClick} />
        </SubmitButton>
      </Container>
      {!hideBackdrop && <Backdrop onClick={onButtonClick} show={show} />}
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
