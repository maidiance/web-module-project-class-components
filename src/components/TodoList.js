import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
    render() {
        return(
            <div>
                {
                    props.todo.map(item => {
                        <Todo key={item.id} todo={item} handleToggleTodo={props.handleToggleTodo} />
                    })
                }
            </div>
        )
    }
}

export default TodoList;