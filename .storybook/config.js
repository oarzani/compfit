import { configure, addDecorator } from "@storybook/react";
import styled from "styled-components";
import React from "react";
import GlobalStyle from "../src/components/GlobalStyle";

const Main = styled.div`
  margin: 10px;
`;

const GlobalStyleDecorator = storyFn => (
  <Main>
    <GlobalStyle />
    {storyFn()}
  </Main>
);
addDecorator(GlobalStyleDecorator);
// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
