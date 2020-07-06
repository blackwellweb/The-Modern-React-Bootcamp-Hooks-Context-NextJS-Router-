import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

const API_BASE_URL = "https://icanhazdadjoke.com/";

class Jokes extends Component {

    static defaultProps = {
        numJokeToGet: 10
    }

    constructor(props) {
        super(props);
        this.state = { jokes: [] }

        this.addToScore = this.addToScore.bind(this);
    }


    addToScore(id) {

        

        // this.state.jokes.forEach(joke => {
        //     if(joke.id === id){
        //         // joke.score = joke.score ++;

        //         //let foundIndex = this.state.jokes[joke]
        //         console.log(foundIndex)
        //     }
        // });

        this.state.jokes.forEach((e, index) => {
            if (e.id === id) {
                let newState = this.state.jokes.splice(index, { joke:e.joke, score: e.score++, id: e.id });
                console.log(newState);
            }
        });



        //const foundIndex = this.state.jokes.findIndex(x => x.id === id);
        //console.log(foundIndex);
        //const newState = this.state.jokes.splice(foundIndex, )

    }




    async componentDidMount() {

        let jokes = [];

        while (jokes.length < this.props.numJokeToGet) {
            let res = await axios.get(API_BASE_URL, {
                headers: { Accept: 'application/json' }
            });
            jokes.push({ joke: res.data.joke, score: 0, id: uuid() });
        }

        this.setState({ jokes: jokes });
    }


    render() {

        const jokes = this.state.jokes.map(j => (
            <Joke key={j.id} jokeText={j.joke} score={j.score} jokeId={j.id} addToScore={this.addToScore} />
        ));

        return (
            <div className="Jokes">
                {jokes}
            </div>
        )
    }
}



export default Jokes;