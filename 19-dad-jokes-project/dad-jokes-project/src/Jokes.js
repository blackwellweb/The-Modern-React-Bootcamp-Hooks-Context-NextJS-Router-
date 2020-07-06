import React, { Component } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://icanhazdadjoke.com/";

class Jokes extends Component {

    constructor(props) {
        super(props);

        this.state = { jokes: '' }
    }


    async componentDidMount() {

        let joke = await axios.get(API_BASE_URL, {
            headers: { Accept: 'application/json' }
        });
    

        const data = joke.data;

        this.setState(curSate => ({
            jokes: [
                ...curSate.jokes,
                {
                    id: data.id,
                    image: data.joke,
                    score: ''
                }
            ]
        }));
        

    }


    render() {
        return (
            <div className="Jokes">
                <h1>I am the Jokes</h1>
            </div>
        )
    }
}



export default Jokes;