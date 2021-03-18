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
            <React.Fragment>
                <PostInput user={this.props.user} posts={this.props.posts}/>
                <Posts user={this.props.user} posts={this.props.posts} delete={this.props.deletePost}/>
                <NewsContainer/>
            </React.Fragment>
        )
    }
}
export default connect(null, { deletePost })(UserContainer);