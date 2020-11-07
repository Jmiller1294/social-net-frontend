import React from 'react';
import Post from './Post';

const Posts = (props) => {
    const { user,posts } = props;

    return (
        <ul>
           {posts && posts.map((post, index) => <Post key={index} post={post} />)}
        </ul>
    )
}
export default Posts;

