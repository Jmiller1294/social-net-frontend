import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('root')
);


