import React, { Component } from 'react'
import './Die.css';

class Die extends Component {

    render() {
        return (
            <div className={this.props.isPlaying === true ? 'Die Die--roll-animation' : 'Die'}>
                <i className={`Die__icon fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }

}


export default Die;