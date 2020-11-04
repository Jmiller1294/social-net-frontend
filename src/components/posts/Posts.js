import React from 'react';
import Post from './Post'

const Posts = (props) => {
    const { posts } = props;

    return (
        <div>
           {posts && posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}
    
    
export default Posts;

