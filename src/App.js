import './App.css';
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
        
      </div>
    );
  }

}

export default App;
