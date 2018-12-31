import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Assignment5.css";

class Assignment5 extends Component {
  render() {
    return (
      <div className="Assignment5">
        <p>
          {" "}
          <a
            target="_blank"
            href="https://catalog.data.gov/dataset/directory-of-homeless-population-by-year-ffe5a"
          >
            Click here{" "}
          </a>
          to see the website where I gain the dataset.
        </p>
        <p>
          <a href="http://i6.cims.nyu.edu/~rc3477/cgi/">Click here</a> to see my
          homework website.
        </p>
        <p id="description">
          The dataset is from Data.gov and was released by the NYC state
          government. It briefly tells the information about the homeless
          population in NYC from 2009 to 2012. I believe this dataset is of good
          use for people who are interested in the homeless to general
          population ratio, scholars who are investigating about
          homeless-relative issue or politicians who want to formulate pocilies
          about unsheltered homeless. <br />
          However, since this dataset is not large. I made two forms: one of
          them lets the user choose one area and shows them all population from
          2009 to 2012. The user can also choose to sort the result by year or
          population, descending or ascending.
          <br />
          Another form lets the user choose a year and and shows them all
          population of different areas. The user can also choose to sort the
          result by area or population, descending or ascending.
          <br />
          By creating these two forms, I want my users to be able to see the
          different population for different areas and also see how the
          population changes over time for one specific area.
        </p>
      </div>
    );
  }
}

export default Assignment5;
