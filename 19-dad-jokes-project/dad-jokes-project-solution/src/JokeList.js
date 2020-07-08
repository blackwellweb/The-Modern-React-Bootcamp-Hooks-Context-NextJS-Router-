import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import { v1 as uuid } from 'uuid';
import './JokeList.css';

class JokeList extends Component {

    static defaultProps = {
        numJokeToGet: 10
    }

    constructor(props) {
        super(props);
        this.state = { jokes: [] };
    }


    async componentDidMount() {
        // Load Jokes 
        let jokes = [];
        while (jokes.length < this.props.numJokeToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" }
            });
            jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
        }
        this.setState({ jokes: jokes });
    }


    handleVote(id, delta) {


        /**
         * Map over the existing jokes in th state.
         * check each one if that ID is equal to the ID we are looking for
         * If it is we make a new object containing the old joke information,
         * but we up date the votes
         * Else if its not the correct one we're looking for we just add the existing joke
         * into the array 
        */
        this.setState(st => ({
            jokes: st.jokes.map(j =>
                j.id === id ? { ...j, votes: j.votes + delta } : j
            )
        }))
    }


    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="image of a laughing emoji"/>
                    <button className="JokeList-getmore">New Joke</button>
                </div>
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <Joke
                            key={j.id}
                            votes={j.votes}
                            text={j.text}
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)} 
                        />
                    ))}
                </div>
            </div>
        )
    }
}




export default JokeList;