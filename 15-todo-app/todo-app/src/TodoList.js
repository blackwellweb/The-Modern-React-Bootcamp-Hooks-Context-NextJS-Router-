import React, { Component } from 'react';
// import Todo from './Todo';
import TodoForm from './TodoForm';


class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {tasks: [] };
        this.create = this.create.bind(this);
    }


    create(task) {
        this.setState({
            tasks : [...this.state.tasks, task]
        });
    }

    render(){
        return(
            <div className="TodoList">
                <h1>Todo List!</h1>
                <p>A simple React Todo List App</p>
                <TodoForm createTask={this.create}/>
            </div>
        )
    }
}

export default TodoList;
