import React from "react";
import Badge from "../components/Badge";
import styled from "styled-components";

export default {
  title: "Badge"
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Active = () => <Badge>Courses</Badge>;

export const Inactive = () => <Badge active={false}>Wellnes</Badge>;

export const ListetVertical = () => (
  <FlexContainer>
    <Badge>Courses</Badge>
    <Badge>Cardio</Badge>
    <Badge>Wellnes</Badge>
  </FlexContainer>
);

export const ListetHorizontal = () => (
  <>
    <Badge>Wellnes</Badge>
    <Badge>Wellnes</Badge>
    <Badge>Wellnes</Badge>
  </>
);
