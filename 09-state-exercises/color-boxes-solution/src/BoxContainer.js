import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {

    static defaultProps = {
        numBoxes: 18,
        allColors: ['#FF8329', '#F65C66', '#C6558E', '#835A97', '#465680', '#2F4858'],
    }

    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box />
        )

        return <div colors={this.props.allColors} className="BoxContainer">{boxes}</div>
    }
}

export default BoxContainer;

