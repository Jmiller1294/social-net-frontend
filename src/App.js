import './App.css';
import UserPage from './containers/UserPage'
import { connect } from 'react-redux' 
import { fetchUser } from './actions/fetchUser'
import React, { Component } from 'react'
import { Route} from 'react-router-dom';


class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="App">
            <UserPage user={this.props.user} />
      </div>
    );
  }
}

  const mapDispatchToProps = (dispatch) => ({
      fetchUser: () => dispatch(fetchUser())
  })
  
  
export default connect(null, mapDispatchToProps)(App);
