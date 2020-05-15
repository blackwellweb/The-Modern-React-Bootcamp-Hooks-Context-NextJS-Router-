import React, { Component } from 'react'
import Coin from './Coin';


class CoinFlip extends Component {



    constructor(props) {
        super(props);

        this.state = {
            currentFace: '',
            totalHeads: 0,
            totalTails: 0,
            totalFlips: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    flip() {
        const faces = ['head', 'tails'];
        let getFace = faces[Math.floor(Math.random() * faces.length)];

        let incrementTotalFlips = this.state.totalFlips + 1;

        if(getFace === 'head'){
            let incrementTotalHeads = this.state.totalHeads + 1;
            this.setState({totalHeads:  incrementTotalHeads});
        } else {
            let incrementTotalTails = this.state.totalTails + 1;
            this.setState({totalTails:  incrementTotalTails});
        }

        this.setState({
            currentFace: getFace,
            totalFlips: incrementTotalFlips,
        });

    }

    handleClick() {
        this.flip();
    }

    render() {
        return (
            <div className="CoinFlip">
                <h1>Lets flip a coin!</h1>
                <Coin face={this.state.currentFace} />
                <button onClick={this.handleClick}>Flip Me</button>
                <p>Out of {this.state.totalFlips}, there has been {this.state.totalHeads} heads and {this.state.totalTails} tails</p>
            </div>
        )
    }
}

export default CoinFlip;