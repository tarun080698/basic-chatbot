// import JsonData from '../DataSource/data.json';
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    let toCheck = ["hello", "hi", "hey", "hii", "hii"];

    let lowerMsg = message.trim();
    lowerMsg = lowerMsg.toLowerCase();

    //for empty input
    if (lowerMsg === "") {
      this.actionProvider.handleEmptyInput();
    }
    //for Greeting input
    else if (toCheck.some((o) => lowerMsg.includes(o))) {
      this.actionProvider.handleGreet();
    }
    // for components options
    else if (lowerMsg.includes("components")) {
      this.actionProvider.handleComponents();
    } //for adapter options
    else if (lowerMsg.includes("adapter") || lowerMsg.includes("ad")) {
      this.actionProvider.handleAdOption();
    }
    //for co-relator options
    else if (lowerMsg.includes("co-relator") || lowerMsg.includes("cr")) {
      this.actionProvider.handleCrOption();
    }
    //for data store options
    else if (lowerMsg.includes("data store") || lowerMsg.includes("ds")) {
      this.actionProvider.handleDsOption();
    }
    //for local console options
    else if (lowerMsg.includes("local console") || lowerMsg.includes("lc")) {
      this.actionProvider.handleLcOption();
    }
    else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
