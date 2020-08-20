import React, { Component } from "react";
import "./App.css";
import Chatbot from "react-chatbot-kit";

import config from "./BotConfig/config";
import MessageParser from "./Components/MessageParser";
import ActionProvider from "./Components/ActionProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatbot
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          config={config}
        />
      </div>
    );
  }
}

export default App;
