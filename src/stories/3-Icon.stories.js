import React from "react";

import BackInWhite from "../components/icons/BackInWhite";
import OpenAccordion from "../components/icons/OpenAccordion";
import CloseAccordion from "../components/icons/CloseAccordion";
import MeetIcon from "../components/DoesMeet.js";
import NotMeetIcon from "../components/DoesNotMeet.js";

export default {
  title: "Icons"
};

export const Back = () => <BackInWhite />;

export const OpenAccordionButton = () => <OpenAccordion />;

export const CloseAccordionButton = () => <CloseAccordion />;

export const DoesMeet = () => <MeetIcon />;

export const NotMeet = () => <NotMeetIcon />;
