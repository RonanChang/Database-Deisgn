import React, { Component } from "react";
import Home from "./Home.js";
import About from "./About.js";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
