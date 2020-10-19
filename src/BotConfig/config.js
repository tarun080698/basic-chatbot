// Config starter code

import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Widgets/BotView/BotAvatar";
import UserAvatar from "../Widgets/UserView/UserAvatar";

import data from "../assets/DataSource/questionnaire.json";
import Questions from "../Widgets/Questions/Question";

const botName = "Donna";
// Bronco
const config = {
  botName: botName,
  lang: "no",
  initialMessages: [
    createChatBotMessage(`👋 Hi. I’m ${botName} and I’m awesome.`, {
      withAvatar: true,
      loading: true,
      terminateLoading: true,
      delay: 500,
    }),
    createChatBotMessage(`I work for <company>. What can i help you?`, {
      loading: true,
      terminateLoading: true,
      // widget:"questions",
      delay: 1000,
    }),
  ],

  state: {
    goto: "id-1",
    ask: data["id-1"]["ask"],
    talk: data["id-1"]["pre-talk"],
  },

  widgets: [
    {
      widgetName: "questions",
      widgetFunc: (props) => <Questions {...props} />,
      mapStateToProps: ["goto", "ask", "talk"],
    },
  ],

  // to change color or bot message-background & input send button
  customStyles: {
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "rgb(60, 134, 230)",
    },
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#cccaca",
    },
  },
  customComponents: {
    // Replaces the default header
    header: () => (
      <div
        style={{
          backgroundColor: "rgb(60, 134, 230)",
          fontFamily: "Times New Roman",
          width: "auto",
          height: "auto",
          textAlign: "left",
          fontSize: "25px",
          color: "rgb(248, 248, 248)",
          padding: "6px 6px 6px 12px",
          borderRadius: "2px",
        }}
      >
        Conversation with Donna
      </div>
    ),
    

    botAvatar: (props) => <BotAvatar {...props} />,
    // botChatMessage: (props) => <CustomChatMessage {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
    // userChatMessage: (props) => <MyUserChatMessage {...props} />
  },
};

export default config;
