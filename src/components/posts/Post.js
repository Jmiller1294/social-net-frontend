import React from 'react';
import styled from 'styled-components';

export const PostCard = styled.div`
    position: relative; 
    width: 100%;
    min-height: 175px;
    background-color: rgb(245, 245, 245);
    margin: 10px auto 10px auto;
    border-radius: 5px;
    word-wrap: break-word;
    text-align: center;
    padding: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
`
export const PostContent = styled.p`
    font-weight: bold;
    min-height: 100px;
    padding: 5px;   
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin: 10px auto 10px auto;
`   
export const DeleteButton = styled.button`
    border-radius: 5px;
    margin: 10px 10px 10px auto;
    color: #fff;
    background-color:#007bff;
`

export const PinButton = styled.button`
    border-radius: 5px;
    color: #fff;
    background-color:#007bff;
` 

const Post = (props) => {

    const { post, user } = props;

    const handleClick = (event) => {
        props.delete(post.id)
    }

    
    return (
        <PostCard>
            <b>Posted by:</b> {user.name}
            <PostContent>{post.content}</PostContent>
            <DeleteButton onClick={event => handleClick(event)}>Delete Post</DeleteButton>
            <PinButton onClick={() => props.pinned(post)}>Pin</PinButton>
        </PostCard>
    )
}
export default Post;




