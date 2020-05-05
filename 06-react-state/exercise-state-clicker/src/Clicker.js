import React, { Component } from 'react'
import './Clicker.css';


class Clicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 1,
            isWinner: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Get random number from numbers array
        let getRandomNumber = numbers[Math.floor(Math.random() * numbers.length)];

        // Set state to new random number
        this.setState({ randomNumber: getRandomNumber });

        // If random number is 7 set state isWinner to true
        if (getRandomNumber === 7) {
            this.setState({ isWinner: true });
        }
    }


    render() {
        return (
            <div className="Clicker">
                <h1>Number is {this.state.randomNumber}</h1>
                <h2>{this.state.isWinner ? 'You win!' : ''}</h2>
                <button className={this.state.isWinner ? 'Clicker__button--hide' : 'Clicker__button--show'} onClick={this.handleClick}>Random Number</button>
            </div>
        )
    }
}

export default Clicker;