import React, { Component } from "react";
import "./News.css";

class News extends Component {
  render() {
    return (
      <div className="News">
        <div className="article">
          <time>{this.props.date}</time>

          <div className="body">
            <a href={this.props.link} target="_blank">
              {this.props.title}
            </a>
            <p>{this.props.body}</p>
          </div>
          <figure>
            <img src={this.props.src} alt="Image not found." />
          </figure>
        </div>
        <div className="mythoughts">
          <div className="blankspace" />
          <div className="thoughts">{this.props.thoughts}</div>
        </div>
      </div>
    );
  }
}

export default News;
