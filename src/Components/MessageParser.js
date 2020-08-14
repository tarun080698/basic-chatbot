// import JsonData from '../DataSource/data.json';
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  state = {
    message: null,
    data: null,
  };

  parse(message) {
    let toCheck = ["hello", "hi", "hey", "hii", "hii", "hiiii"];

    let lowerMsg = message.trim();
    lowerMsg = lowerMsg.toLowerCase();

    if (lowerMsg === "") {
      this.actionProvider.handleEmptyInput();
    } else if (toCheck.some((o) => lowerMsg.includes(o))) {
      this.actionProvider.handleGreet();
      this.actionProvider.handleComponents();
    } //for adapter options 
    else if (lowerMsg.includes("adapter") || message.includes("ad")) {
      this.actionProvider.handleAdOptions();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
