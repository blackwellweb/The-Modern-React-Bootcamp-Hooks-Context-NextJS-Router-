import React from 'react';
import  './Pokedex.css';

// Get Pokecard
import Pokecard from './Pokecard';

class Pokedex extends React.Component {

  
    render() {
        return (
            <div className="Pokedex">
               <Pokecard />
               <Pokecard />
               <Pokecard />
               <Pokecard />
            </div>
        );
    }
}


export default Pokedex;