import React, { Component, useReducer } from 'react';
import { connect } from 'react-redux'
import PostInput from '../components/PostInput'
import Posts from '../components/Posts'

class PostsContainer extends Component {

    render() {
        
        return (
            <div>
                <PostInput />
                <Posts posts={this.props.user.posts}/>
            </div>
        )
    }
}



export default PostsContainer;