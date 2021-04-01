import React from 'react';
import styled from 'styled-components';

export const FriendsListContainer = styled.div`
  position: fixed;
  width: 23%;
  border: 2px solid black;
  border-radius: 5px;
  height: 868px;
  margin-top: 40px;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
`
export const ListItem = styled.li`
  border: 1px solid black;
  width: 90%;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
`
export const Offline = styled.span`
  color: red;
`
export const Online = styled.span`
  color: green;
`
export const Header = styled.h3`
    text-align: center;
`

const FriendsList = (props) => {
  return (
    <FriendsListContainer>
      <Header>Friends List</Header>
      <List>
        {props.friends.map(friend => {
          if(friend.status === "online") {
            return <ListItem key={friend.id}>{friend.name}: <Online>{friend.status}</Online></ListItem>
          }
          else {
            return <ListItem key={friend.id}>{friend.name}: <Offline>{friend.status}</Offline></ListItem>
          }
        })
        }
      </List>
    </FriendsListContainer>
  )
} 
export default FriendsList;