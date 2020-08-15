import React, { Component } from "react";
import "./BotandButton.css";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "../Components/MessageParser";
import ActionProvider from "../Components/ActionProvider";
// import botbtnImg from '../assets/images/botbtn.jpg'

class BotButton extends Component {
  state = {
    chatbot: false,
  };

  handleClick = () => {
    if (this.state.chatbot) {
      this.setState({
        chatbot: false,
      });
    } else this.setState({ chatbot: true });
  };

  render() {
    const chat = (
      <div>
        <Chatbot
          className="chat-window"
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          config={config}
        />
      </div>
    );

    return (
      <div className="BotButton">
        {this.state.chatbot ? <>{chat}</> : null}
        <img
          className="chatbtn-image"
          src="https://rb.gy/auzrt4"
          onClick={this.handleClick}
          alt="botButton"
        />
        {!this.state.chatbot ? null : (
          <img
            className="chatbtn-image"
            src="https://rb.gy/auzrt4"
            onClick={this.handleClick}
            alt="botButton"
          />
        )}
      </div>
    );
  }
}

export default BotButton;
