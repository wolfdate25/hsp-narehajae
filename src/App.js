import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Category from "./components/Category/Category";
import DetailCategory from "./components/Category/DetailCategory";
import Home from "./components/Home";
import React from "react";
import LeftPanel from "./components/Nav/LeftPanel";
import Description from "./components/Description/Description";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RaonHajae</title>
      </Helmet>
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
    </div>
  );
}

export default App;
