import React, { Component } from 'react'
import './RollDice.css'

import Die from './Die';





class RollDice extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dieOne: 'one',
            dieTwo: 'two',
        }

        this.handleClick = this.handleClick.bind(this);
        this.roll = this.roll.bind(this);
    }


    static defaultProps = {
        faces: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    // We will use this got get a random face from the defaultProps
    // There is a better way of doing this but I don’t know how to do it so for now this will have to work
    roll(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    handleClick(e) {
        this.setState({
            dieOne: this.roll(this.props.faces),
            dieTwo: this.roll(this.props.faces),
        });

    }



    render() {
        return (
            <div className="RollDice">
                <div className="RollDice__Dice">
                    <Die  face={this.state.dieOne} />
                    <Die  face={this.state.dieTwo} />
                </div>
                <button className="RollDice__btn" onClick={this.handleClick}>Roll Dice!</button>
            </div>
        )
    }
}


export default RollDice;