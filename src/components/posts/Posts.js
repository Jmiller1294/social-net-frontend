import React from 'react';
import Post from './Post';

const Posts = (props) => {
    const { user,posts } = props;
    const sortedPosts = posts.sort(function(a,b){return a.id > b.id ? -1 : b.id > a.id ? 1 : 0})
    return (
        
        <ul className="postlist">   
            <h2>Posts</h2>
            <hr></hr>
           {sortedPosts && sortedPosts.map(post => 
           <Post key={post.id} user={user} 
           post={post} delete={props.delete} />)}
        </ul>
    )
}
export default Posts;

