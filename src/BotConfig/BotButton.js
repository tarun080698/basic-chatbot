import React, { useState } from "react";

import "./Button.css";
import Chatbot from "react-chatbot-kit";

import config from "../BotConfig/config";
import actionProvider from "../BotConfig/ActionProvider";
import messageParser from "../BotConfig/MessageParser";

import icon from "../assets/images/support-service-bot.jpg";

function BotButton() {

  const [showBot, toggleBot] = useState(false);
  
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    // console.log(messages.length);
    // if(messages.length >= 24) localStorage.clear() 
    return messages;
  };

    return (
      <div className="BotButton">
        {showBot && (
          <Chatbot
            config={config}
            actionProvider={actionProvider}
            messageHistory={loadMessages()}
            messageParser={messageParser}
            saveMessages={saveMessages}
          />
        )}
        <img onClick={() => toggleBot((prev) => !prev)} className="bot-icon" src={icon} alt="bot icon"></img>
      </div>
    );
  }

export default BotButton;
