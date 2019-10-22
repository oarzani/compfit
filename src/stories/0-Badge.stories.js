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

export const Active = () => <Badge active>Courses</Badge>;

export const Inactive = () => <Badge>Wellnes</Badge>;

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

export const Controlled = () => {
  const [active, setActive] = React.useState(true);

  return (
    <Badge active={active} onClick={() => setActive(!active)}>
      Click me
    </Badge>
  );
};
