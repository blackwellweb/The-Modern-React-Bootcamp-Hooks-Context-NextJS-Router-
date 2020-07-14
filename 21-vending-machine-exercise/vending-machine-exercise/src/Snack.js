import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Snack extends Component {
    render(){
        return(
            <div className="Snack">
                <h1>I am a {this.props.name}</h1>
                <NavLink exact activeClassName="active-link" to="/">Go back</NavLink>
            </div>
        )
    }
}


export default Snack;