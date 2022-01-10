import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
    }

    handleClick = () => {
        props.handleToggleTodo(this.props.item);
    }

    render() {
        return (
            <div onClick={handleClick} className={`todo${this.props.todo.completed ? ' completed' : ''}`}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo;