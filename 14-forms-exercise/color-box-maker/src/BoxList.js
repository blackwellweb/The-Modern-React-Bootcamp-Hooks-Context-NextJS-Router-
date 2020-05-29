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
    }


    addBox(box){
        let newBox = {...box, id: uuid()}

        this.setState(state => ({
            // Take all the old boxes, add in our new box and put it in a new array and set that to be the value of boxes
            boxes: [...state.boxes, newBox]

        }));
    }



    renderBoxes() {
        return (
            this.state.boxes.map(box => (
                <Box key={box.id} height={box.height} width={box.width}/>
            ))
        )
    }



    render() {
        return (
            <div className='BoxList'>
                <NewBoxForm addBox={this.addBox}/>
                {this.renderBoxes()}
            </div>
        )
    }
}


export default BoxList;