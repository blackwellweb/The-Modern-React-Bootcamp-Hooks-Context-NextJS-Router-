import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Sardines extends Component {
    render() {
        return (
            <div className="Sardines">
                <Message>
                    <h1>I am the  Sardines</h1>
                    <Link exact to="/">Go Back</Link>
                </Message>
            </div>
        )
    }
}


export default Sardines;