import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="header">
          <Link to="/">
            <img id="return" src="return.png" alt="back" />
          </Link>
          <h2> {this.props.name}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

export default Content;
