import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe
          title="dys"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20112.51304383811!2d6.957779294349707!3d50.941027031867655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf251ce48200a3%3A0x819cf1557c825b94!2sHealthCity%20All%20Inclusive%20K%C3%B6ln%20Stadtgarten!5e0!3m2!1sde!2sde!4v1570702673653!5m2!1sde!2sde"
          width="400"
          height="300"
          frameborder="0"
          allowfullscreen=""
        ></iframe>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
