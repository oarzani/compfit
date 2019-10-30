import React from "react";
import Results from "../Pages/Results";
import Details from "../Pages/Details";
import Start from "../Pages/Start";

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
