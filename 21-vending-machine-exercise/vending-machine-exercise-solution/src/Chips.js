import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Chips extends Component {
    render() {
        return (
            <div className="Chips">
                <Message>
                    <h1>I am the Chips</h1>
                    <Link exact to="/">Go Back</Link>
                </Message>
            </div>
        )
    }
}


export default Chips;