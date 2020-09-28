// ActionProvider starter code

class ActionProvider {
    state = {
      message: null,
    };
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
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
      const user_message = this.createClientMessage(message ,{
        message: message,
        type: "user",
        withAvatar:false
      });
      this.addMessageToBotState(user_message)
    };

  setBotMessage = (message) => {
      const bot_message = {
        message: message,
        type: "bot",
        withAvatar:false
      };
    this.addMessageToBotState(bot_message)
    };
  
    // somewhat same for reply, don't change unless necessary
  addMessageToBotState = (messages) => {
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