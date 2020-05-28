import React, { Component } from 'react';


class Box extends Component {
    render() {

        const boxStyles = {
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: '#61dafb'
        }

        return (
            <div className='Box' style={boxStyles}>

            </div>
        )
    }
};

export default Box;


