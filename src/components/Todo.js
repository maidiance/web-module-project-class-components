import React from 'react';

class Todo extends React.Component {
    handleClick = () => {
        props.handleToggleTodo(props.item);
    }
    
    render() {
        return (
            <div onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`}>
                <p>{props.todo.task}</p>
            </div>
        )
    }
}

export default Todo;