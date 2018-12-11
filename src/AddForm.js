import React, { Component } from "react";

class AddForm extends Component {
  state = {
    content: ""
  };

  //Se usa para detectar el valor que escribio el usuario en el formulario
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  //Agrego el valor introducido en el formulario en el state
  handleSubmit = e => {
    e.preventDefault();
    //Paso el nuevo state (la nueva tarea) al root
    this.props.addTodo(this.state);
    //Esto sirve para borrar el texto de la vista una vez que agrego la tarea
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="task"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
export default AddForm;
