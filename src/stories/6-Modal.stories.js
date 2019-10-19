import React from "react";
import Modal from "../components/Modal";
import DurationBar from "../components/DurationBar";
import RangeBar from "../components/RangeBar";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import Badge from "../components/Badge";
import Start from "../Pages/Start";
import MainPage from "../Pages/MainPage";

export default {
  title: "Modal-Components"
};

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

export const Modalize = () => (
  <>
    <Modal />
  </>
);
export function Show() {
  return (
    <Modal onAccept={action("accept")} onClose={action("close")}>
      <Title>Choose Contract Duration</Title>
      <DurationBar />
      <Title>Choose Price</Title>
      <RangeBar />
      <Line />
      <Title>Select Folowing</Title>
      <BadgeContainer>
        <Badge>Courses</Badge>
        <Badge>Wellness</Badge>
        <Badge>Cardio</Badge>
        <Badge>Strength</Badge>
        <Badge>Kidsarea</Badge>
        <Badge>Ladyarea</Badge>
      </BadgeContainer>
      <Line />
      <Title>Select Neighborhood(s)</Title>
      <BadgeContainer>
        <Badge>Ehrenfeld</Badge>
        <Badge>Nippes</Badge>
        <Badge>Alt-Stadt</Badge>
        <Badge>Süd-Stadt</Badge>
        <Badge>Deutz</Badge>
        <Badge>Sülz</Badge>
      </BadgeContainer>
    </Modal>
  );
}

export function Hide() {
  return (
    <>
      <Modal show={false} onAccept={action("accept")} onClose={action("close")}>
        <DurationBar />
        <RangeBar />
      </Modal>
      <p>
        Take a look at the inspector to verify that the modal is set to{" "}
        <code>display: none;</code>
      </p>
    </>
  );
}

export const Test = () => (
  <>
    <MainPage />
  </>
);
