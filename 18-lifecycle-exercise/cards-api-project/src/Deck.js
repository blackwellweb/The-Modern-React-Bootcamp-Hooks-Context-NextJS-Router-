import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = { deckID: '', cards: ''};

    }

    async componentDidMount() {
       // Get deck ID
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle').then(response => {
            this.setState({ deckID: response.data.deck_id });
        });

    //     const id = this.state.deckID;
    //     axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`).then(response => {
    //         // this.setState({ deckID: response.data.deck_id });
    //         console.log(response.data)
    //     });
    // }
    }



    render() {
        return(
            <div>
                <h1>I am the deck</h1>
                <Card />
            </div>
        )
    }
}

export default Deck;
