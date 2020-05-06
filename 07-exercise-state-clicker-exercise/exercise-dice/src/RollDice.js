import React, { Component } from 'react'
import './RollDice.css'

import Die from './Die';

class RollDice extends Component {
    render(){
        return(
            <div>
                <Die />
            </div>
        )
    }
}


export default RollDice;