import React, { Component } from 'react';
import './Box.css';
import { randomColor } from './helper';

class Box extends Component {


    constructor(props) {
        super(props);
        this.state = {
            newRandomColor: null
        }

        this.handleClick = this.handleClick.bind(this);
    }


    getNewRandomColor(){
        let newColour = randomColor(this.props.colors);

        while (newColour === this.props.initialColor) {
            newColour = randomColor(this.props.colors);
        }

        this.setState(st => {
            return {newRandomColor: newColour}
        })
    }


    handleClick(e){
        this.getNewRandomColor();
    }


    render() {
        return (
            <div onClick={this.handleClick} className="Box" style={this.state.newRandomColor ? { backgroundColor: this.state.newRandomColor } : { backgroundColor: this.props.initialColor }}></div>
        )
    }
}

export default Box;