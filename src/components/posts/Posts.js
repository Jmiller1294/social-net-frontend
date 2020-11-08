import React from 'react';
import Post from './Post';

const Posts = (props) => {
    const { user,posts } = props;

    return (
        <ul className="postlist">
            <h2>Posts</h2>
            <hr></hr>
           {posts && posts.map(post => <Post key={post.id} post={post} delete={props.delete} />)}
        </ul>
    )
}
export default Posts;

