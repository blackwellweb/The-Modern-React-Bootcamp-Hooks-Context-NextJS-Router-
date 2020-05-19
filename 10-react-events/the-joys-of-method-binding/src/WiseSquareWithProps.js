import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {


  static defaultProps = {
    messages: [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ]
  }


  constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
  }


  dispenseWisdom() {
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/accessible-emoji
      // <div className="WiseSquare" onMouseEnter={this.dispenseWisdom.bind(this)}>😃</div> // Con new function created on every render
      // <div className="WiseSquare" onMouseEnter={() => this.dispenseWisdom()}>😃</div> // Cons Intent less clear because no bind() is used and new function created on every render 
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>😃</div> // BEST WAY : bind in the constructor, pros only need to bind once!
    )
  }
}

export default WiseSquare;
