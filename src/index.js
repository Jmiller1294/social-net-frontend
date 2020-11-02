import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import usersReducer from './reducers/UsersReducer'

import { BrowserRouter as Router, Route} from 'react-router-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from "redux";
import UserContainer from './containers/UserContainer';


const rootReducer = combineReducers({
  users: usersReducer,
})


const store = createStore(
  rootReducer, applyMiddleware(thunk)
)


ReactDOM.render(
  <Router>
    <Route exact path="/users" component={UserContainer} />
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);


