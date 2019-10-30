import React from "react";
import Results from "../pages/Results";
import Details from "../pages/Details";
import Start from "../pages/Start";

export default {
  title: "Pages"
};

export const StartPage = () => (
  <>
    <Start />
  </>
);

export const FinalModal = () => (
  <>
    <Results />
  </>
);

export const PageDetail = () => (
  <>
    <Details />
  </>
);
