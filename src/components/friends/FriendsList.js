import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

export const FriendsListContainer = styled.div`
  position: fixed;
  width: 23%;
  border: 2px solid black;
  border-radius: 5px;
  height: 868px;
  margin-top: 40px;
  background-color: rgb(245, 245, 245);
  
`
export const List = styled.ul`
  list-style: none;
  padding-left: 15px;
`
export const ListItem = styled.li`
  border: 1px solid black;
  padding: 5px;
  width: 90%;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 10px #777777;
  }
`
export const Status = styled.span`
  color: ${props => props.theme.color};
`
export const Header = styled.h3`
  margin-top: 5px;
  text-align: center;
`

const themeOnline = {
  color: "green"
}

const themeOffline = {
  color: "red"
}

const FriendsList = (props) => {
  return (
    <FriendsListContainer>
      <Header>Friends List</Header>
      <List>
        {props.friends.map(friend => {
          return <ListItem key={friend.id}>{friend.name}: 
            <ThemeProvider theme={friend.status === 'online' ? themeOnline 
            : themeOffline}>
              <Status>{friend.status}</Status>
            </ThemeProvider>
          </ListItem>
        })
        }
      </List>
    </FriendsListContainer>
  )
} 
export default FriendsList;