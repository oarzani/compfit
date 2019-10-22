import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./Pages/Start";

import Results from "./Pages/Results";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Router>
        <Route exact path="/" component={Start} />
        <Route exact path="/results" component={Results} />
      </Router>
    </Container>
  );
}

export default App;
