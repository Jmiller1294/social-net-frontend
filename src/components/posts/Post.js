import React from 'react'

const Post = (props) => {
    const { post } = props;

    const handleClick = (event) => {
        props.delete(post.id)
    }

    return (
        <div className="postcard">
            <p>{post.content}</p>
            <button onClick={event => handleClick(event)}>Delete</button>
        </div>  
    )
}
export default Post;




