import React, { Component } from 'react';


class Card extends Component {
    render(){
        return(
            <div className="Card">
                <img src={this.props.cardImage} alt={`${this.props.value} ${this.props.suit}`}></img>
            </div>
        )
    }
}


export default Card;