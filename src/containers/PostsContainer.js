import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'
import { addPost } from  '../actions/addPost'

class PostsContainer extends Component {
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default connect(null, { addPost})(PostsContainer);