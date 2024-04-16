import React, { Component, StrictMode } from "react";
import { HousesSheet } from "./components/HousesSheet.js";
import "./App.css";
// import { House } from "./components/House.js";

class App extends Component {
  render() {
    return (
      <div>
        <HousesSheet />
      </div>
    );
  }
}
export default App;
