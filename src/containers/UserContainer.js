import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput';
import Posts from '../components/posts/Posts';
import NewsContainer from './ArticlesContainer';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { deletePost } from '../actions/deletePost';

class UserContainer extends Component {
    
    render() {
        //const user = this.props.users[this.props.match.params.id - 1]
        return (
            <div className="container">
                <PostInput user={this.props.user} posts={this.props.posts}/>
                <Posts user={this.props.user} posts={this.props.posts} delete={this.props.deletePost}/>
                <NewsContainer/>
            </div>
        )
    }
}
export default connect(null, { deletePost })(UserContainer);