import React from 'react';

const Posts = (props) => {
    const { posts } = props;

    return (
        <div>
           {posts && posts.map(post => <li key={post.id} >{post.content}</li>)}
        </div>
    )
}
    
    
export default Posts;

