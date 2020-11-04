import React, { Component, useReducer } from 'react';
import { connect } from 'react-redux'
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'

class PostsContainer extends Component {

    render() {
        
        return (
            <div>
                <PostInput />
                <Posts posts={this.props.posts}/>
            </div>
        )
    }
}



export default PostsContainer;