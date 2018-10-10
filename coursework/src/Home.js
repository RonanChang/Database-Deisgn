import React, { Component } from "react";
import Assignment from "./Assignment.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: this.props.assignments
    };
  }

  render() {
    let assignmentsCopy = this.state.assignments.slice();
    const assignments = assignmentsCopy.map(a => {
      return <Assignment name={a.name} id={a.id} key={a.id} />;
    });

    return (
      <div className="App">
        <h1> Ruonan Chang</h1>
        <h2> Database Design and Web Implementation </h2>

        {assignments}
      </div>
    );
  }
}

export default App;
