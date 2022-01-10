import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value,
        })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input);
        this.setState({
            ...this.state,
            input: '',
        })
    }

    render () {
        return (
            <form>
                <input onChange={this.handleChanges} type='text' name='todo' />
                <button onClick={this.addTodo}>Add Todo</button>
                <button onClick={this.props.handleClearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;