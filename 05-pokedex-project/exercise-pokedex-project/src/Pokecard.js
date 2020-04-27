import React from 'react';
import './Pokecard.css';

class Pokecard extends React.Component {

    // Pokemon characters
    static defaultProps = {
        PokemonCharacters: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };

    render() {
        
        // Function that allows us to get a random Pokemon Character
        function getRandomPokemon(items) {
            let randomPokemon = items[Math.floor(Math.random() * items.length)];

            // This will also remove a Pokemon from PokemonCharacters so we don't us it more than once 
            items.splice(items.indexOf(randomPokemon), 1);

            return (randomPokemon);
        }

        // Fire our getRandomPokemon and assign it to a variable
        let pokemon = getRandomPokemon(this.props.PokemonCharacters);

        return (
            <div className="Pokecard">
                <h1 className="Pokecard-name">{pokemon.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name}></img>
                <span className="Pokecard-type">Type: {pokemon.type}</span>
                <span className="Pokecard-exp">Type: {pokemon.base_experience}</span>
            </div>
        );
    }
}


export default Pokecard;