import React, { Component } from 'react';
import UserContainer from './containers/UserContainer';
import FriendsContainer from './containers/FriendsContainer'
import Profile from './containers/Profile';
import NoMatch from './components/NoMatch';
import { fetchUser } from './actions/fetchUser';
import { Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';

class App extends Component {


  componentDidMount() {
    this.props.fetchUser()
  }
  
  render() {
    return (
      <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => <UserContainer {...props} user={this.props.user} posts={this.props.posts} />}/>
            <Route exact path="/profile" render={(props) => <Profile {...props} user={this.props.user} posts={this.props.posts} />}/>
            <Route exact path="/friends" render={(props) => <FriendsContainer {...props} friends={this.props.friends}/>}/>
            <Route component={NoMatch} />
          </Switch>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
      user: state.users,
      posts: state.users.posts,
      friends: state.users.friends
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
