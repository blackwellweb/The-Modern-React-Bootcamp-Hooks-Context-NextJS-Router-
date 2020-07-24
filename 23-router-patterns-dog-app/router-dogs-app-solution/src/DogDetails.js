import React, { Component } from 'react';

// rcc

class DogDetails extends Component {
    render() {
        let { dog } = this.props;
        return (
            <div className="DogDetails row">
                <div className="col-11 col-5-lg">
                    <h1>{this.props.dog.name}</h1>
                </div>
            </div>
        )
    }
}

export default DogDetails;
