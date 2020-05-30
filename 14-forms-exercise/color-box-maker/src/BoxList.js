import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { height: 100, width: 100, id: uuid() },
                { height: 100, width: 100, id: uuid() }
            ]
        }
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }


    addBox(box) {
        let newBox = { ...box, id: uuid() }

        this.setState(state => ({
            // Take all the old boxes, add in our new box and put it in a new array and set that to be the value of boxes
            boxes: [...state.boxes, newBox]

        }));
    }

    removeBox(key) {
        // This method will be passed into the Box component as a prop 
        // Loop over all boxes in the state, if key of the box that has been clicked on is the same as 
        // one of the ID’s form the state removes that box from the state 
        this.state.boxes.forEach(box => {
            if (box.id === key) {
                const newState = this.state.boxes.splice(this.state.boxes.indexOf(box, 1));
                this.setState(newState);
            }
        });
    }


    renderBoxes() {
        return (
            this.state.boxes.map(box => (
                <Box
                    key={box.id}
                    height={box.height}
                    width={box.width}
                    removeBox={this.removeBox}
                    keyProp={box.id}
                />
            ))
        )
    }



    render() {
        return (
            <div className='BoxList'>
                <NewBoxForm addBox={this.addBox} />
                {this.renderBoxes()}
            </div>
        )
    }
}


export default BoxList;