import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <div>Welcome to SmurfVille!</div>
        <div>La La La La La La!</div>
        <Smurfs></Smurfs>

      </div>
    );
  }
}

export default App;
