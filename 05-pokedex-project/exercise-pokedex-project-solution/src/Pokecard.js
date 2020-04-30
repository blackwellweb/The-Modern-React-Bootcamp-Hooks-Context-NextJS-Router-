import React, { Component } from 'react';
import './Pokecard.css';
// const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const Poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// This function takes a number, if the number s is greater 
// than 999 then don’t pad just return number, else take to zeros plus the number then slice 3 digits out of that and return those three 
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name}></img>
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        );
    }
}


export default Pokecard;