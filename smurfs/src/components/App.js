import React, { Component } from "react";
import "./App.css";
import AddSmurfForm from "./AddSmurfForm";
import Village from "./Village";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <AddSmurfForm />
        <Village />
      </div>
    );
  }
}

export default App;
