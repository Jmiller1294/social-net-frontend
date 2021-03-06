import React from 'react';
import styled from 'styled-components';
import postPicture from '../../assets/profile.jpg';

export const PostCard = styled.li`
    position: relative; 
    width: ${ (props) => props.width + "%"};
    min-height: 175px;
    max-width: 450px;
    background-color: rgb(245, 245, 245);
    margin: 10px auto 10px auto;
    border-radius: 5px;
    word-wrap: break-word;
    text-align: center;
    padding: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 0 10px #777777;
    }
`
export const PostContent = styled.p`
    text-align: center;
    font-weight: bold;
    min-height: 100px;
    padding-top: 30px;  
    padding-bottom: 30px; 
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin: 10px auto 10px auto;
`   
export const DeleteButton = styled.button`
    border-radius: 15px;
    margin: 10px 10px 10px auto;
    color: #fff;
    background-color:#007bff;
`

export const PinButton = styled.button`
    border-radius: 15px;
    color: #fff;
    background-color:#007bff;
` 
export const PostPicture = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-right: 5px;
`



const Post = (props) => {
    const { post, user } = props;

    const handleClick = (post) => {
        props.delete(post.id)
    }

    const getDate = (created) => {
        let date = created.slice(0, 10);
        return date;
    }

    // const getTime = (created) => {
    //     let time = created.slice(12, 16)
    //     return time;
    // }

    if(props.allPosts === false) {
        return (
            <PostCard width={props.width}>
                <PostPicture src={postPicture}/>
                <b>{user.name}</b>
                <PostContent>{post.content}</PostContent>
                Posted on <b>{getDate(post.created_at)}</b>   
            </PostCard>
        )
    }
    else {
        return (
            <PostCard width={props.width}>
                <b>Posted by:</b> {user.name}
                <PostContent>{post.content}</PostContent>
                <DeleteButton onClick={() => handleClick(post)}>Delete Post</DeleteButton>
                <PinButton onClick={() => props.pinned(post)}>Pin</PinButton>
            </PostCard>
        )
    }
}
export default Post;




