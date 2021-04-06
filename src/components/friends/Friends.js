import React from 'react';
import Friend from './Friend'
import styled from 'styled-components';

export const FriendsContainer = styled.div`
    height: 1800px;
    width: 1140px;
    margin: 0 auto 0 auto;
    padding: 0;
`
export const Header = styled.h2`

`

export const FriendsList = styled.ul`

`

const Friends = (props) => {
    const { friends } = props

    return (
        <FriendsContainer>
            <Header>Friends List({friends && friends.length})</Header>
            <hr></hr>
            <FriendsList>
                {friends && friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
            </FriendsList>
        </FriendsContainer>
    )
}

export default Friends