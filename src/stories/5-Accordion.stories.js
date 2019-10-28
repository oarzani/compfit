import React from "react";
import AccordionCardio from "../components/AccordionComps/AccordionCardio";
import AccordionCourses from "../components/AccordionComps/AccordionCourses";
import AccordionStrength from "../components/AccordionComps/AccordionStrength";
import AccordionWellnes from "../components/AccordionComps/AccordionWellnes";

export default {
  title: "Accordion"
};

export const ItPlays = () => (
  <>
    <AccordionCardio />
    <AccordionCourses />
    <AccordionStrength />
    <AccordionWellnes />
  </>
);
