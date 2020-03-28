import React, { Component } from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heloo ToDo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
