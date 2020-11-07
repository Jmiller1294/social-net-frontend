import '../App.css';
import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'


class UserContainer extends Component {
    
    
    render() {
        return (
        <div>
            <div>
                <PostInput user={this.props.user} posts={this.props.posts}/>
            </div>
            <div>
                <Posts user={this.props.user} posts={this.props.posts} />
            </div>
        </div>

        )
    }

}
export default UserContainer;