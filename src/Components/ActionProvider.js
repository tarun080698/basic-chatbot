// ActionProvider starter code

// import JsonData from "../DataSource/data.json";

class ActionProvider {
  state = {
    message: null,
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
        widget: "compList",
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
    // let ad_data = JsonData.AD
    // // const message = this.createChatBotMessage("Please tell use more about your issue.")
    // // this.addMessageToBotState(message)
    // // console.log(props.lowerMsg)
    // let options = []
    // for (var i = 0; i < ad_data.length; i++) {
    //   options.push(ad_data[i].Symptom)
    // }

    const messages = this.createChatBotMessage(
      "Let me check what possibly can go wrong with adapter.",
      {
        loading: true,
        terminateLoading: true,
        widget: "adapterIssues",
      }
    );

    this.addMessageToBotState(messages);
  };

  handleCrOption = () => {
    console.log("CR clicked");
    const messages = this.createChatBotMessage(
      "Let me check what possibly can go wrong with co-relator.",
      {
        loading: true,
        terminateLoading: true,
        widget: "correlatorIssues",
      }
    );

    this.addMessageToBotState(messages);
  };

  handleDsOption = () => {
    console.log("DS clicked");
    const messages = this.createChatBotMessage(
      "Let me check what possibly can go wrong with co-relator.",
      {
        loading: true,
        terminateLoading: true,
        widget: "dataStoreIssues",
      }
    );

    this.addMessageToBotState(messages);
  };

  handleLcOption = () => {
    console.log("LC clicked");
    const messages = this.createChatBotMessage(
      "Let me check what possibly can go wrong with co-relator.",
      {
        loading: true,
        terminateLoading: true,
        widget: "localConsoleIssues",
      }
    );

    this.addMessageToBotState(messages);
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
