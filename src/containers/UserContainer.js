import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'


class UserContainer extends Component {
    
    
    render() {
        return (
        <React.Fragment>
            <PostInput user={this.props.user} posts={this.props.posts}/>
            <Posts user={this.props.user} posts={this.props.posts} />
        </React.Fragment> 
        )
    }

}
export default UserContainer;