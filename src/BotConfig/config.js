// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "../Components/BotView/BotAvatar";
import UserAvatar from "../Components/UserView/UserAvatar";

import Ad from "../Components/Widgets/components/AdOptions";
import Cr from "../Components/Widgets/components/CrOptions";
import Ds from "../Components/Widgets/components/DsOptions";
import Lc from "../Components/Widgets/components/LcOptions";
import Comps from "../Components/Widgets/components/compOptions";


const botName = "GadhaPrasad";

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
    gist: "",
  },
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <BotAvatar {...props} />,
    // // Replaces the default user icon
    userAvatar: (props) => <UserAvatar {...props} />,
  },

  // to change color or bot message-background & input send button
  customStyles: {
    botMessageBox: {
      backgroundColor: "#2e2501",
    },
    userMessageBox: {
      backgroundColor: "#2e2501",
    },
    chatButton: {
      backgroundColor: "#fcd73f",
    },
  },
  widgets: [
    {
      widgetName: "compList",
      widgetFunc: (props) => <Comps {...props} />,
      mapStateToProps: ["gist"],
      props: {}
    },
    {
      widgetName: "adapter",
      widgetFunc: (props) => <Ad {...props} />,
      mapStateToProps: ["gist"],
      props: {}
    },
    {
      widgetName: "correlator",
      widgetFunc: (props) => <Cr {...props} />,
      mapStateToProps: ["gist"],
      props: {}
    },
    {
      widgetName: "dataStore",
      widgetFunc: (props) => <Ds {...props} />,
      mapStateToProps: ["gist"],
      props: {}
    },
    {
      widgetName: "localConsole",
      widgetFunc: (props) => <Lc {...props} />,
      mapStateToProps: ["gist"],
      props: {}
    },
  ],
};

export default config;
