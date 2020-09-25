// ActionProvider starter code
import chats from "../BotConfig/chats"
var chat = chats.chat

class ActionProvider {
    state = {
      message: null,
    };
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
  handleQuestion = (goto, ask, talk) => {
    this.setState((prevState) => ({ ...prevState, goto, ask, talk }));
    this.addMessageToBotState(this.createChatBotMessage(talk, {
      withAvatar:true,
      loading: true,
      terminateLoading: true,
      delay: 500,
    }))
    this.addMessageToBotState(this.createChatBotMessage(ask ,{
      loading: true,
      terminateLoading: true,
      widget: "questions",
      delay: 1000,
    }))
  };
  
  setUserInput = (message) => {
      const user_message = {
        message: message,
        type: "user",
        withAvatar:false
      };
      this.addMessageToBotState(user_message)
    };

  setBotMessage = (message) => {
      const bot_message = {
        message: message,
        type: "user",
        withAvatar:false
      };
    this.addMessageToBotState(bot_message)
    };
  
    // somewhat same for reply, don't change unless necessary
  addMessageToBotState = (messages) => {
    chat.push(messages)
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
  };
  }
  
  export default ActionProvider;