import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  // val: 5 in the defaultProps will just allow the Die to animate when the page first loads and will be immediately overridden after
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 5
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }


  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props;

    let classes = ` Die fas fa-dice-${numberWords[val - 1]} fa-5x `
    if(locked) classes += 'Die-locked';
    if(rolling) classes += 'Die-rolling';

    return <i className={classes} onClick={this.handleClick} disabled={disabled}></i>
 
  }
}

export default Die;
