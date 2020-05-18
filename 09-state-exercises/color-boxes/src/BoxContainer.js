import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';
import { randomColor } from './helper';


class BoxContainer extends Component {

    static defaultProps = {
        numBoxes: 16,
        colors: ['#FF8329', '#F65C66', '#C6558E', '#835A97', '#465680', '#2F4858']
    };



    render() {


        const boxes = [];

        for (let i = 0; i < this.props.numBoxes; i++) {
            boxes.push(<Box
                initialColor={randomColor(this.props.colors)}
                colors={this.props.colors}
            />)
        }


        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;