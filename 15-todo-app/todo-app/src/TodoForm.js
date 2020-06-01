import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = { task: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            task: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        // Make new task/Todo, this will be passed in as a prop
        this.setState({ task: '' });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TodoForm">
                <label htmlFor="task">New Todo</label>
                <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    id="task"
                />
                <button>Add Todo</button>
            </form>
        );
    }

}


export default TodoForm;
