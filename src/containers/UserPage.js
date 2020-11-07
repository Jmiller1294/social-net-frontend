import React, { Component } from 'react';
import PostsContainer from './PostsContainer';
import Profile from '../containers/Profile';
import NavBar from '../components/NavBar';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux'
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'




class UserPage extends Component {
    
    render() {
        return (
            <div>  
                <NavBar />
                <Route exact path="/profile" render={(props) => <Profile {...props} user={this.props.user} posts={this.props.posts} />}/>
                <PostInput user={this.props.user} posts={this.props.posts}/>
                <Posts user={this.props.user} posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users,
        posts: state.users.posts,
    }
  }

export default connect(mapStateToProps)(UserPage);