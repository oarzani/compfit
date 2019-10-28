import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./Pages/Start";
import GlobalStyle from "../src/components/GlobalStyle";

import Results from "./Pages/Results";
import Details from "./Pages/Details";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <Route exact path="/" component={Start} />
          <Route exact path="/results" component={Results} />
          <Route path="/results/:studioName" component={Details} />
        </Router>
      </Container>
    </>
  );
}

export default App;
