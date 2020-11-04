import './App.css';
import HomePage from './containers/HomePage'
import Profile from './containers/Profile'
import { connect } from 'react-redux' 
import { fetchUser } from './actions/fetchUser'


import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar'

class App extends Component {


  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/"  render={(props) => (
            <HomePage {...props} user={this.props.users} isAuthed={true} />
          )}/>
          <Route exact path="/profile" component={Profile} />
        </Router>
      </div>
    );
  }
}

  
  const mapStateToProps = state => {
      console.log(state)
      return {
        users: state.users.users,
        loading: state.users.loading,
      }
    }
  
  
  const mapDispatchToProps = (dispatch) => ({
      fetchUser: () => dispatch(fetchUser())
  })
  
  
export default connect(mapStateToProps ,mapDispatchToProps)(App);
