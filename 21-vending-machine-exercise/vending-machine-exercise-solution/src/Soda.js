import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';


class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <Message>
                    <h1>I am the  Soda</h1>
                    <Link exact to="/">Go Back</Link>
                </Message>
            </div>
        )
    }
}


export default Soda;