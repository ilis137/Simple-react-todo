import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './addTodos';

class App extends Component {

    state = {
        todos: [
            { id: 1, content: 'buy some Milk' },
            { id: 2, content: 'wet clothes' }
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo =>
            todo.id != id);
        this.setState({ todos });
    }
    addTodo = (item) => {
        item.id = Math.random();
        let todos = [...this.state.todos, item]
        this.setState({
            todos
        })
    }

    render() {
        return ( <
            div className = "todo-App container" >

            <
            h1 className = 'center blue-text' > Todo 's</h1>

            <
            Todos todos = { this.state.todos }
            deleteTodo = { this.deleteTodo }
            />  <
            AddTodos addTodo = { this.addTodo }
            / > < /
            div >
        );
    }
}

export default App;