import React, { Component } from "react";


import "./App.css";
import BotButton from "./BotConfig/BotButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotButton className="bot-btn" />
      </div>
    );
  }
}

export default App;