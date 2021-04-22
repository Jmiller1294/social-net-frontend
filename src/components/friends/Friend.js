import React from 'react';
import styled from 'styled-components';
import blank from '../../assets/blank.png';

export const FriendItem = styled.li`
    float: left;
    margin-right: 50px;
    height: 400px;
    width: 200px;
    list-style: none;
`
export const FriendCard = styled.figure`
    height: 300px;
    width: 200px;
`
export const FriendImage = styled.img`
    height: 250px;
    width: 200px;
`

export const FriendInfo = styled.figcaption`
    height: 50px;
    width: 200px;
    font-size: 20px;
    text-align: center;
    background-color: white;
`

const Friend = (props) => {
    const { friend } = props
    return (
        <FriendItem>
            <FriendCard>
                <FriendImage src={blank}/>
                <FriendInfo>{friend.name}</FriendInfo>
            </FriendCard>
        </FriendItem>
    )
}
export default Friend;