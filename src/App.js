import React, { Component } from 'react'
import UserContainer from './containers/UserContainer'
import Profile from './containers/ProfileContainer';
import NavBar from './components/NavBar'
import { fetchUser } from './actions/fetchUser'
import { Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {


  componentDidMount() {
    this.props.fetchUser()
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <UserContainer {...props} user={this.props.user} posts={this.props.posts} />}/>
          <Route exact path="/profile" render={(props) => <Profile {...props} user={this.props.user} posts={this.props.posts} />}/>
          <Route exact path="/friends" />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
      user: state.users,
      posts: state.users.posts,
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
