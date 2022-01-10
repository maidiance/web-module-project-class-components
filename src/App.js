import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// initial todo
const initTodo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: initTodo,
    }
  }
  
  // Clear Completed
  handleClearCompleted = () => {
    const newTodo = this.state.todo.filter(item => {
      return !item.completed;
    });
    this.setState({
      ...this.state,
      todo: newTodo,
    })
  }

  // Add Todo
  handleAddTodo = (todoName) => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todo:[...this.state.todo, newTodo],
    })
  }

  // Toggle Completed
  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(item => {
        if(item.id === selectedTodo.id)
          return({
            ...item,
            completed: !item.completed,
          }); else {
            return item;
          }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} handleToggleTodo={this.handleToggleTodo} />
        <TodoForm handleAddTodo={this.handleAddTodo} handleClearCompleted={this.handleClearCompleted} />
      </div>
    );
  }
}

export default App;
