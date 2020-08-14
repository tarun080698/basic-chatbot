import React, { Component } from "react";


import "./App.css";
import BotButton from "./BotConfig/BotButton";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <BotButton className="botbtn" />
      </div>
    );
  }
}

export default App;
