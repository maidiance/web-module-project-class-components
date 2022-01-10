import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
    }

    handleClick = () => {
        this.props.handleToggleTodo(this.props.item);
    }

    render() {
        return (
            // onClick={handleClick} className={`todo${this.props.todo.completed ? ' completed' : ''}`}
            <div>
                <p>{this.props.todo.task}</p>
                {
                    console.log('todo', this.props.todo)
                }
            </div>
        )
    }
}

export default Todo;