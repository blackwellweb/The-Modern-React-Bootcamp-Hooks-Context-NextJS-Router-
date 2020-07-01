import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = { deckID: '', cards: '' };

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        // Get deck ID
        axios.get(API_URL).then(response => {
            this.setState({ deckID: response.data.deck_id });

        });


        // const id = this.state.deckID;
        //     axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`).then(response => {
        //         // this.setState({ deckID: response.data.deck_id });
        //         console.log(response.data)
        //     });
    }





    makeNewCard() {
        return (
            <Card dID={this.state.deckID} />
        )

    }

    handleClick(evt) {
        console.log('I was clicked')

    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Gimme a card!</button>
            </div>
        )
    }
}

export default Deck;
