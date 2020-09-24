// ActionProvider starter code
class ActionProvider {
    state = {
      message: null,
      chats: [],
    };
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
  handleQuestion = (goto, ask, talk) => {
    console.log("here");
    this.setState((prevState) => ({ ...prevState, goto }));
    this.setState((prevState) => ({ ...prevState, ask }));
    this.setState((prevState) => ({ ...prevState, talk }));
    this.addMessageToBotState(this.createChatBotMessage(talk, {
      withAvatar:true,
      loading: true,
      terminateLoading: true,
      delay: 500,
    }))
    let message = this.createChatBotMessage(ask ,{
      loading: true,
      terminateLoading: true,
      widget: "questions",
      delay: 1000,
    });
    this.addMessageToBotState(message);
  };
  
  
  setUserInput = (message) => {
      const user_message = {
        message: message,
        type: "user",
        withAvatar:false
      };
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, user_message],
      }));
    };

  setBotMessage = (message) => {
    console.log("in bot message");
      const bot_message = {
        message: message,
        type: "bot",
        withAvatar:false
      };
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, bot_message],
      }));
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