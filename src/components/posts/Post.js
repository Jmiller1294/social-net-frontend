import React from 'react'
import { Button } from 'react-bootstrap'

const Post = (props) => {
    const { post } = props;

    const handleClick = (event) => {
        props.delete(post.id)
    }

    return (
        <div className="postcard">
            <p>{post.content}</p>
            <Button className="deletebutton" onClick={event => handleClick(event)}>Delete Post</Button>
        </div>  
    )
}
export default Post;




