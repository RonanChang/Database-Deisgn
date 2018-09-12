import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Assignment.css";

class Assignment extends Component {
  render() {
    return (
      <div className="Assignment">
        <Link to={"/assignments/" + this.props.id}> {this.props.name}</Link>
      </div>
    );
  }
}

export default Assignment;
