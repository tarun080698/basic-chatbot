// ActionProvider starter code

// import JsonData from "../DataSource/data.json";

class ActionProvider {
  state = {
    message: null,
    data: null,
  };
  constructor(createChatBotMessage, setStateFunc, fetchData) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  //handling initial inputs
  handleEmptyInput = () => {
    const message = this.createChatBotMessage(
      "Don't be shy. C'mon talk to me!",
      {
        withAvatar: true,
        delay: 500,
        widget: "initial",
      }
    );
    this.addMessageToBotState(message);
  };

  handleGreet = () => {
    const message = this.createChatBotMessage("Hello, How may i help you?", {
      withAvatar: true,
      delay: 300,
      widget: "initial",
    });
    this.addMessageToBotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, I don't recognize that issue.😕😕😕. Please try again.",
      {
        withAvatar: true,
        delay: 1000,
        widget: "initial",
      }
    );
    this.addMessageToBotState(message);
  };

  handleComponents = (options) => {
    const message = this.createChatBotMessage(
      "Fetching the list of components",
      {
        widget: "compList",
        loading: true,
        delay: 500,
        terminateLoading: true,
        ...options,
      }
    );

    this.addMessageToBotState(message);
  };
  //handling components

  handleAdOption = () => {
    console.log("AD clicked");
    
    const message = this.createChatBotMessage("Please tell more something about the issue", {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      widget: "adapter",
    });

    this.addMessageToBotState(message);
  };

  handleCrOption = () => {
    console.log("CR clicked");
    const message = this.createChatBotMessage(`CR clicked`, {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      widget: "correlator",
    });

    this.addMessageToBotState(message);
  };

  handleDsOption = () => {
    console.log("DS clicked");
    const message = this.createChatBotMessage(`DS clicked`, {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      widget: "dataStore",
    });

    this.addMessageToBotState(message);
  };

  handleLcOption = () => {
    console.log("LC clicked");
    const message = this.createChatBotMessage(`LC clicked`, {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      widget: "localConsole",
    });

    this.addMessageToBotState(message);
  };

  // somewhat same for reply, don't change unless necessary
  // setChatBotState = (message) => {
  //   this.setState((state) => ({
  //     ...state,
  //     messages: [...state.messages, message],
  //   }));
  // };

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
