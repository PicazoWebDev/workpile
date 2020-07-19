import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./Task";

class App extends Component {
  state = {
    workpile: [
      { name: "Tarea 1", assignedTo: "Carlos", status: "In progress" },
    ],
  };

  render() {
    return (
      <div className="App">
        <Task
          name={this.state.workpile[0].name}
          assignedTo={this.state.workpile[0].assignedTo}
          status={this.state.workpile[0].status}
        />
      </div>
    );
  }
}

export default App;
