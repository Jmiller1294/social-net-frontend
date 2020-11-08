import React from 'react'

const Post = (props) => {
    const { post } = props;

    return (
        <div className="postcard">
            <p>{post.content}</p>
        </div>
               
    )
}
export default Post;




