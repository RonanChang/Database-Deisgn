import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        This is the home page
        <Link to="/about">About page</Link>
      </div>
    );
  }
}

export default Home;
