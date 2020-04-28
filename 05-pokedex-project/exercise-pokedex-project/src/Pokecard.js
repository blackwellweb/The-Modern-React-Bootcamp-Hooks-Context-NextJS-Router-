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

        // Function will return a random Pokemon Character
        function getRandomPokemon(items) {
            let randomPokemon = items[Math.floor(Math.random() * items.length)];

            // This will also remove a Pokemon from PokemonCharacters so we don't us it more than once 
            items.splice(items.indexOf(randomPokemon), 1);

            return (randomPokemon);
        }

        // Fire our getRandomPokemon and assign it to a variable
        let pokemon = getRandomPokemon(this.props.PokemonCharacters);



        // This function will pad an ID with zeros to three places, like: 001, 002, 034, 199, etc. 
        // This is because the image source work if the images aren’t padded with zeros
        function padImage(id) {

            let newId = id.toString();
    
            for (let i = 0; i < newId.length; i++) {
                if(newId.length < 3){
                    newId = '0' + newId; // Add a zero to the start of Id
                }
            }
            return(newId); 
        }


        return (
            <div className="Pokecard">
                <h1 className="Pokecard-name">{pokemon.name}</h1>
                <img className="Pokecard-img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padImage(pokemon.id)}.png`} alt={pokemon.name}></img>
                <span className="Pokecard-type">Type: {pokemon.type}</span>
                <span className="Pokecard-exp">Type: {pokemon.base_experience}</span>
            </div>
        );
    }
}


export default Pokecard;