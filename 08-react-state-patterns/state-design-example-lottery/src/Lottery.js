import React, { Component } from 'react'
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40,
    }


    constructor(props) {
        super(props);
        
        this.state = { nums: Array.from({length: this.props.numBalls}) };  // This will make the first set off balls blank, if the array was empty it wouldn't show any balls
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        // Make a new array with the length of nums and fill each item with an random number for 1 to 40
        this.setState(curState => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }


    handleClick() {
        this.generate();
    }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }



}


export default Lottery;