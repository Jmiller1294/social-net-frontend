import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import usersReducer from './reducers/UsersReducer'

import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , compose} from 'redux';
import { combineReducers } from "redux";



const rootReducer = combineReducers({
  users: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


