import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import Home from "./components/Home";
import React from "react";
import LeftPanel from "./components/Nav/LeftPanel";
import Description from "./components/Description";

function App() {
  return (
    <BrowserRouter>
      <LeftPanel />
      <Switch>
        <Route path="/home">
          {" "}
          <Home />
        </Route>
        <Route path="/description">
          {" "}
          <Description />
        </Route>
        <Route path="/category/:category" component={Category} />
        <Route path="/category" component={Category} />

        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
