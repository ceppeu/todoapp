import React, { Component } from "react";
//Importo todos los componentes que voy a utilizar
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };

  addTodo = todo => {
    //Asigno un id a la nueva tarea
    todo.id = Math.random();
    //Hago una copia del state en una nueva variable
    let tasks = [...this.state.todos, todo];
    //Actualizo el state con la nueva tarea creada
    this.setState({
      todos: tasks
    });
  };

  deleteToDo = taskId => {
    //Itero sobre el state para copiarlo a una nueva variable sin el valor que matchea mi id
    const todos = this.state.todos.filter(todo => {
      return todo.id !== taskId;
    });

    //Actualizo el state sin el valor eliminado
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
