import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostInput from '../components/PostInput'
import Posts from '../components/Posts'

class PostsContainer extends Component {

    render() {
        
        return (
            <div>
                <PostInput />
                <Posts />
            </div>
        )
    }
}



export default PostsContainer;