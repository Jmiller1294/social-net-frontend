import React, { Component } from 'react';
import Profile from './ProfileContainer';
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'
import { Route, Switch } from 'react-router-dom';


class UserContainer extends Component {
    
    
    render() {
        return (
        <React.Fragment>
            <Switch>
                <Route exact path="/profile" render={(props) => <Profile {...props} user={this.props.user} posts={this.props.posts} />}/>
                <Route exact path="/friends" />
            </Switch>
            <PostInput user={this.props.user} posts={this.props.posts}/>
            <Posts user={this.props.user} posts={this.props.posts} />
        </React.Fragment> 
        )
    }

}
export default UserContainer;