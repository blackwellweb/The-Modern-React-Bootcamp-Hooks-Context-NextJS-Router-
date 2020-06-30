import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css'


class ZenQuote extends Component {

    constructor(props) {
        console.log('Inside constructor');
        super(props);
        this.state = { quote: '', isLoaded: false };
    }

    componentDidMount() {
        console.log('Inside  componentDidMount');
        // Load data 
        // Set state with that data
        axios.get('https://api.github.com/zen').then(response => {
            setTimeout(
                function () {
                    this.setState({ quote: response.data, isLoaded: true });
                }.bind(this),
                3000
            );
        });
    }

    componentDidUpdate() {
        console.log('Inside componentDidUpdate');
    }


    render() {
        console.log('Inside render');
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                        <div className="loader">

                        </div>
                    )}
            </div>
        );
    }
}

export default ZenQuote;