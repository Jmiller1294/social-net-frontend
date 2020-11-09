import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const Post = (props) => {
    const { post, user } = props;

    const handleClick = (event) => {
        props.delete(post.id)
    }

    return (
        <div className="postcard">
            Posted by:{user.name}
            <hr className="posttop"></hr>
                <p>{post.content}</p>
            <hr className="postbottom"></hr>
            <Button className="deletebutton" onClick={event => handleClick(event)}>Delete Post</Button>
            <p>12-31-12</p>
        </div>  
    )
}
export default Post;




