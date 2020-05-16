import React, { Component } from 'react';
import './Coin.css';
import head from './head.jpg';
import tails from './tails.jpg'

class Coin extends Component {
    
    render(){

        let image;

        if(this.props.face === 'head'){
            image = head;
        } else if (this.props.face === 'tails') {
            image = tails;
        }

        return(
            <div className="Coin">
                <img src ={image} alt={this.props.face}></img>
            </div>
        );
    }
    
}

export default Coin;
