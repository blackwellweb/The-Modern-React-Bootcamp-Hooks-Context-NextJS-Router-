import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine">
                <h1>I am the Vending Machine</h1>
                <p>Go to:</p>
                <NavLink exact activeClassName="active-link" to="/soda">Soda</NavLink>
                <NavLink exact activeClassName="active-link" to="/chips">Chips</NavLink>
                <NavLink exact activeClassName="active-link" to="/sardines">Sardines</NavLink>
            </div>
        )
    }
}


export default VendingMachine;