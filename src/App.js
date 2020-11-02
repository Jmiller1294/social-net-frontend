import './App.css';
import UserContainer from './containers/UserContainer'
import React, { Component } from 'react'


class App extends Component {

  render() {
    return (
      <div className="App">
        <UserContainer />
      </div>
    );
  }

}

export default App;
