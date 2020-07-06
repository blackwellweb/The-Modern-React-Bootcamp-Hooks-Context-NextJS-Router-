import React, { Component } from 'react';

class Joke extends Component {


    constructor(props) {
        super(props);
        this.handleVoteUp = this.handleVoteUp.bind(this);
    }



    handleVoteUp() {
        console.log(this.props.jokeId);
        this.props.addToScore(this.props.jokeId);
    }



    render() {
        return (
            <div className="Joke">
                <p>{this.props.jokeText}</p>
                <button onClick={this.handleVoteUp}>Vote-up</button>
                <p>Score: {this.props.score}</p>
                <button>Vote-down</button>
            </div>
        )
    }
}


export default Joke;
