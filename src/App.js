import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome
          name={<strong>Salvatore</strong>}
          age={<strong>29!</strong>} />
          <h2>I 30 sono dietro l'angolo</h2>
      </div>
    );
  }
}

export default App;
