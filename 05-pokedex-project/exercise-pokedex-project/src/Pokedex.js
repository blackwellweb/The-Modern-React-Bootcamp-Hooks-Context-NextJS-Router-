import React from 'react';
import  './Pokedex.css';

// Get Pokecard
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
               <h1>This is a Pokedex</h1>
               <Pokecard />
            </div>
        );
    }
}


export default Pokedex;