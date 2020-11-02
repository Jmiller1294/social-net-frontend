import './App.css';
import UsersContainer from './containers/UserContainer'
import React, { Component } from 'react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <UsersContainer />
      </div>
    );
  }

}

export default App;
