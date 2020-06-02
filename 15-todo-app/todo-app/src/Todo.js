import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {


    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }


    handleEdit(evt){
        // This will run a method passed in as a prop by the parent component 
        console.log('I was edited');
    }

    handleRemove(evt){
        this.props.removeTask(this.props.id);
    }

    render(){
        return(
            <div className="Todo">
                <span>{this.props.text}</span>
                <i onClick={this.handleEdit} className="fas fa-pen Todo__edit"></i>
                <i onClick={this.handleRemove} className="fas fa-dumpster Todo__remove"></i>
            </div>
        );
    }


}


export default Todo;