import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostInput from '../components/PostInput'

class PostsContainer extends Component {

    render() {
        
        return (
            <div>
                <PostInput />
            </div>
        )
    }
}
export default connect()(PostsContainer);