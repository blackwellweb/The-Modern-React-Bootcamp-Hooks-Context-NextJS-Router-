import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <h1>I am the  Soda</h1>
                <Link exact to="/">Go Back</Link>
            </div>
        )
    }
}


export default Soda;