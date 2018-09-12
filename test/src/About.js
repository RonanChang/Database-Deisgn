import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="About">
        this is the about page
        <Link to="/">Home page</Link>
      </div>
    );
  }
}

export default About;
