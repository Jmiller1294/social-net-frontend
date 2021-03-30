import './App.css';
import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/AboutPage';
import HomePage from './containers/HomePage';
import FriendsPage from './containers/FriendsPage';
import ProfilePage from './containers/ProfilePage';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import { fetchUser } from './actions/fetchUser';
import { Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux';

export const Container = styled.div`
  font-family: 'Lato', sans-serif;
  margin-left: 5px;
  margin-right: 2px;
`

class App extends Component {


  componentDidMount() {
    this.props.fetchUser()
  }
  
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Container>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/user" render={(props) => <HomePage {...props} user={this.props.user} posts={this.props.posts} friends={this.props.friends} />}/>
            <Route exact path="/profile" render={(props) => <ProfilePage {...props} user={this.props.user} posts={this.props.posts} />}/>
            <Route exact path="/friends" render={(props) => <FriendsPage {...props} friends={this.props.friends}/>}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
      user: state.users,
      posts: state.posts,
      friends: state.friends
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

