import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/home" render={(props) => <App {...props} />} />
            {/*라우팅*/}
            {/*<Route*/}
            {/*    path="/other"*/}
            {/*    render={(props) => <NucleoIcons {...props} />}*/}
            {/*/>*/}
            <Redirect to="/home" />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
