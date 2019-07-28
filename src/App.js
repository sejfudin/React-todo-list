import React, { Component } from 'react';
import Todos from './components/Todos'      //importing Todos.js file
import AddTodo from './components/AddTodo'  //importing AddTodo.js file

//This component will be class component becouse we have state
class App extends Component {
  state = { // object
    todos: [ //array with objects
      {id: 1, content: 'buy some'},
      {id:2, content: 'buy some other' }
    ] 
  }
  // function to delete each todo content
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    });
    this.setState({
      todos: todos //in this case when a key and value have the same name we can write just todos
    })
  }
  //function to adding new todo
  addTodo = (todo) => {
    todo.id=Math.random();// random id
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos ////in this case when a key and value have the same name we can write just todos
    })
  }
  render(){
  return (
    <div className="todo-app container">  
    <h1 className="center blue-text">To-Do List</h1>  
      <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
      <AddTodo addTodo = {this.addTodo}  />
    </div>
  );
}
}
export default App;
