import React from 'react'

const Post = (props) => {
    const { post } = props;

    return (
        <div>
           <li>{post.content}</li>
        </div>
    )
}
    
    
export default Post;




