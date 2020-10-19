import React, { Component } from "react";
import Button from "./Buttons.jsx"
import {FadeIn} from "react-anim-kit" 
import data from "../../assets/DataSource/sample_diagnostics_qna.json";

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.goto,
      clear: false,
    } 
  }

  componentWillUnmount() { 
    console.log("tarun");
  }

  updateId(goto, option) { 
    console.log("in update")
    this.setState({ id: goto,clear: true })
    this.props.actionProvider.setUserInput(option)
    this.props.actionProvider.handleQuestion(goto, data[goto]["ask"], data[goto]["pre-talk"])
  }

  render() {
    const options = data[this.state.id]["options"]
    return (
      <div>
        <FadeIn left by={200}>
          {!this.state.clear && options !== null ? (options.map((opt, i) => {
            return <Button key={i} value={opt.value} goto={opt.goto} action={(goto, value) => this.updateId(goto, value)} />
          })) : (<></>)}
          </FadeIn>
        </div>
    );}
}

export default Questions;