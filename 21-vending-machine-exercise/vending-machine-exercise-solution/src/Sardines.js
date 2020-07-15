import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component {
    render(){
        return(
            <div className="Sardines">
                <h1>I am the  Sardines</h1>
                <Link exact to="/">Go Back</Link>
            </div>
        )
    }
}


export default Sardines;