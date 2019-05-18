import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CreateTeam from "./containers/CreateTeam";
import ListTeam from "./containers/ListTeam";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Match
} from "react-router-dom";

const stylesApp = {
  marginTop: 50
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid" style={stylesApp}>
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route path="/:_id" component={CreateTeam} />
                <Route path="/" component={CreateTeam} />
              </Switch>
            </div>
            <div className="col-md-12">
              <ListTeam />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
