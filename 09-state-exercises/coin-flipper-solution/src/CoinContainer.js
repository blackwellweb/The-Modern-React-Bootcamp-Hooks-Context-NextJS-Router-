import React, { Component } from 'react'
import Coin from './Coin';
import { choice } from './helpers';


// The urls for this example didn’t work so I  imported the images, probably not the best way to do it as this could be in the Coin component
import headImg from './head.jpg';
import tailsImg from './tails.jpg'


class CoinContainer extends Component {


    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: headImg },
            { side: 'tails', imgSrc: tailsImg }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);


        // One way of doing it
        // this.setState(st => {
        //     let newState = {
        //         ...st,
        //         currCoin: newCoin,
        //         nFlips: st.nFlips + 1,
        //     };

        //     if(newCoin.side === "heads") {
        //         newState.nHeads += 1;
        //     } else {
        //         newState.nTails += 1;
        //     }

        //     return newState;

        // })


        // Better way of doing it
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1: 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1: 0)
            };
        });


        
    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {
        return (
            <div className="CoinContainer">
                <h2>Lets Flip a Coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        )
    }
}


export default CoinContainer;