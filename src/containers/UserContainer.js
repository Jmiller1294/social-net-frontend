import '../App.css';
import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput';
import Posts from '../components/posts/Posts';
import NewsContainer from './NewsContainer';
import Layout from '../components/Layout';
import { connect } from 'react-redux'
import { deletePost } from '../actions/deletePost';

class UserContainer extends Component {
    
    
    render() {
        return (
        <div>
            <Layout>
            <div>
                <PostInput user={this.props.user} posts={this.props.posts}/>
                <Posts user={this.props.user} posts={this.props.posts} delete={this.props.deletePost}/>
            </div>
            <div>
                <NewsContainer/>
            </div>
            </Layout>
        </div>
        )
    }

}


export default connect(null, { deletePost })(UserContainer);