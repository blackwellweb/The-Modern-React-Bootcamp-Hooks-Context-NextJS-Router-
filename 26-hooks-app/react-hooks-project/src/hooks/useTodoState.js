import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);

    return {
        todos,
        addTodo:  newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            // Filter out removed todo
            const updatedTodos = todos.filter(todo => todo.id !== todoId)
            // Call setTodos with new todos array 
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            )
            setTodos(updatedTodos);
        }
        
    }
}












