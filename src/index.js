import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import usersReducer from './reducers/UsersReducer'

import { BrowserRouter as Router, Route} from 'react-router-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';



const rootReducer = combineReducers({
  users: usersReducer,
})


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(thunk)
)


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);


