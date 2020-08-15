// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "../Components/BotView/BotAvatar";
import UserAvatar from "../Components/UserView/UserAvatar";

import AdOptions from "../Components/Widgets/components/AdOptions.jsx";
import CrOptions from "../Components/Widgets/components/CrOptions.jsx";
import DsOptions from "../Components/Widgets/components/DsOptions.jsx";
import LcOptions from "../Components/Widgets/components/LcOptions.jsx";
import Comps from "../Components/Widgets/components/compOptions.jsx";


const botName = "NOOB";

const config = {
  botName: botName,
  lang: "no",
  initialMessages: [

    createChatBotMessage(
      `👋👋👋Hello, my name is 😀${botName}😀`
    ),


    createChatBotMessage("I work for DNIF, and I will help you to ⚙️solve problems⚙️by providing relevant tips & methods which you can easily test on your own.", {
      withAvatar: true,
      delay: 500,
      widget: "compList",
    }),
  ],


  state: {
    issues: [],
    selectedIssue: { iata: "logs", nameCompact: "Logs" },
    flightType: "",
    selectedFlightId: "",
    selectedFlight: null,
  },


  

  // to change color or bot message-background & input send button
  
  widgets: [
    {
      widgetName: "compList",
      widgetFunc: (props) => <Comps {...props} />,
      mapStateToProps: ["gist"],
      props: {}
    },
    {
      widgetName: "adapterIssues",
      widgetFunc: (props) => <AdOptions {...props} />,
      mapStateToProps: ["messages", "selectedIssue", "issues"],
    },
    {
      widgetName: "correlatorIssues",
      widgetFunc: (props) => <CrOptions {...props} />,
      mapStateToProps: ["messages", "selectedIssue", "issues"],
    },
    {
      widgetName: "dataStoreIssues",
      widgetFunc: (props) => <DsOptions {...props} />,
      mapStateToProps: ["messages", "selectedIssue", "issues"],

    },
    {
      widgetName: "localConsoleIssues",
      widgetFunc: (props) => <LcOptions {...props} />,
      mapStateToProps: ["messages", "selectedIssue", "issues"],
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#2e2501",
    },
    chatButton: {
      backgroundColor: "#fcd73f",
    },
  },
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <BotAvatar {...props} />,
    // // Replaces the default user icon
    userAvatar: (props) => <UserAvatar {...props} />,
  },
};

export default config;
