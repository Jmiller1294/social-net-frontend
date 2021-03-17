import React from 'react'
import { Button } from 'react-bootstrap'

const Post = (props) => {
    const { post, user } = props;

    const handleClick = (event) => {
        props.delete(post.id)
    }

    
    return (
        <div className="postcard">
            <b>Posted by:</b> {user.name}
            <hr className="posttop"></hr>
                <strong><p>{post.content}</p></strong>
            <hr className="postbottom"></hr>
            <Button className="deletebutton" onClick={event => handleClick(event)}>Delete Post</Button>
            <button onClick={() => props.pinned(post)}>Pin</button>
        </div>  
    )
}
export default Post;




