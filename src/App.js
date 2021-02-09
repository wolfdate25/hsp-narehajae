import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Category from "./components/Category/Category";
import DetailCategory from "./components/Category/DetailCategory";
import Home from "./components/Home";
import React from "react";
import LeftPanel from "./components/Nav/LeftPanel";
import Description from "./components/Description/Description";

function App() {
  return (
    <BrowserRouter>
      <LeftPanel />
      <Switch>
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/description">
          <Description />
        </Route>
        <Route path="/category/:category" component={DetailCategory} />
        <Route path="/category" component={Category} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
