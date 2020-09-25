import React, { Component } from "react";
import "./Button.css";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

import open_bot from "../assets/images/support-service-bot.jpg";
import close_bot from "../assets/images/close-bot.png";

import chats from "../BotConfig/chats";
var talks = chats.chat;

class BotButton extends Component {
  state = {
    chatbot: false,
  };

  handleClick = () => {
    if (this.state.chatbot) {
      this.setState({
        chatbot: false,
      });
    } else {
      this.setState({ chatbot: true });
    }
  };

  render() {  
    const bot_element = (
      <div>
        <Chatbot
          className="chat-window"
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          config={config}
        />
        <img
              className="chatbot-button-image"
              src={close_bot}
              onClick={this.handleClick}
              alt="botButton"
        />
      </div>
    );

    return (
      <div className="BotButton">
        {this.state.chatbot ? (
          <>
            {bot_element}
          </>
        ) : (
          <img
            className="chatbot-button-image"
            src={open_bot}
            onClick={this.handleClick}
            alt="botButton"
          />
            )}
      </div>
    );
  }
}

export default BotButton;
