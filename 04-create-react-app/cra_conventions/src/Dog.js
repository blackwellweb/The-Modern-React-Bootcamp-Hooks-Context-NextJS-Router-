import React, { Component } from 'react';
import './Dog.css'
import pug from './pug.jpg';

class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <h1>Dog! </h1>
                <img className="Dog-img" src={pug}></img>
            </div>
        );
    }
}

export default Dog;