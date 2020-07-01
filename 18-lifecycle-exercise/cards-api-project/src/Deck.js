import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Card from './Card';

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = { deckID: null, cards: [] };

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        // Get deck ID
        axios.get(API_URL).then(response => {
            this.setState({ deckID: response.data.deck_id });
        });

    }


    async getNewCard() {
        const id = this.state.deckID;
        axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`).then(response => {
            const newCard = response.data.cards[0];


            this.setState(curState => {
                return {
                    cards: curState.cards.concat(newCard)
                }
            })

            // Do the same as the code above 
            // this.setState({
            //     cards: [...this.state.cards, newCard]
            // })

        });
    }



    handleClick(evt) {
        this.getNewCard();
    }


    render() {

    
        const cards = this.state.cards.map(card => {
            return(
                <Card 
                key={uuid()}
                cardImage={card.image}
                value={card.value}
                suit={card.suit}
                />
            )
        });
    
        return (
            <div>
                <button onClick={this.handleClick}>Gimme a card!</button>
                {cards}
            </div>
        )
    }
}

export default Deck;
