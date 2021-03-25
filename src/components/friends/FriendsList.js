import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid black;
  height: 800px;
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

const FriendsList = (props) => {
  return (
    <Container>
      <List>
        {props.friends.map(friend => {
          if(friend.status === "online") {
            return <ListItem>{friend.name}: <Online>{friend.status}</Online></ListItem>
          }
          else {
            return <ListItem>{friend.name}: <Offline>{friend.status}</Offline></ListItem>
          }
        })
        }
      </List>
    </Container>
  )
} 
export default FriendsList;