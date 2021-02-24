import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import reportWebVitals from './config/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './router/router';
import { renderRoutes } from 'react-router-config'


ReactDOM.render(
  <Router>{ renderRoutes(routes) }</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
