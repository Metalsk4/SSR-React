import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./home";
import DemoPage1 from "./DemoPage1";
import DemoPage2 from "./DemoPage2";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <div className="App">
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/demo1"
            render={(props) => <DemoPage1 {...props} />}
          />
          <Route
            exact
            path="/demo2"
            render={(props) => <DemoPage2 {...props} />}
          />
          <Redirect to="/home" />
        </div>
      </Switch>
    </div>
  );
}

export default App;
