import './App.css';
import User from './components/User'
import React, { Component } from 'react'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/users/1')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <User />
      </div>
    );
  }

}

export default App;
