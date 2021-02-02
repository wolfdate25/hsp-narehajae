import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import Home from "./components/Home";
import React from "react";
import LeftPanel from "./components/Nav/LeftPanel";

function App() {
  return (
    <BrowserRouter>
      <LeftPanel />
      <Switch>
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/category/:category" component={Category}></Route>
        <Route path="/category" component={Category} />} />
        {/*라우팅*/}
        {/*<Route*/}
        {/*    path="/other"*/}
        {/*    render={(props) => <NucleoIcons {...props} />}*/}
        {/*/>*/}
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
