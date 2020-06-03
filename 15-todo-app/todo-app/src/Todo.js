import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {


    constructor(props) {
        super(props);
        this.state = { showForm: false , text: this.props.text, edited: ''}


        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(evt) {
        this.setState({edited: evt.target.value});
    }



    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({showForm: false , text: this.state.edited, edited: ''});
    }


    handleEdit(evt) {
        this.setState({ showForm: true })
    }

    handleRemove(evt) {
        this.props.removeTask(this.props.id);
    }

    render() {

        let content;

        if (this.state.showForm) {
            content =
                <form onSubmit={this.handleSubmit} className="Todo__form">
                    <input type="text" placeholder={this.state.text}  onChange={this.handleChange} />
                    <button>Save</button>
                </form>
        } else {
            content =
                <div>
                    <span>{this.state.text}</span>
                    <i onClick={this.handleEdit} className="fas fa-pen Todo__edit"></i>
                    <i onClick={this.handleRemove} className="fas fa-dumpster Todo__remove"></i>
                </div>
        }


        return (
            <div className="Todo">
                {content}
            </div>
        );
    }


}


export default Todo;