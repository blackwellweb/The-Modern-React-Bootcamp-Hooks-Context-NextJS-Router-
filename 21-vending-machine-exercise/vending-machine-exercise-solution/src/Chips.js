import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
    render(){
        return(
            <div className="Chips">
                <h1>I am the Chips</h1>
                <Link exact to="/">Go Back</Link>
            </div>
        )
    }
}


export default Chips;