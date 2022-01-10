import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.

class TodoList extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.todo.map(item => {
                        return <Todo key={item.id} todo={item} handleToggleTodo={this.props.handleToggleTodo} />
                        
                    })
                }
            </div>
        )
    }
}

export default TodoList;