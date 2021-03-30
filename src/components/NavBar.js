import React from 'react';
import styled from 'styled-components';
import profile from "../assets/logo.png"

export const Row = styled.div`
   display: flex;
   background-color: #051525;
   height: 40px;
`;

export const Nav = styled.ul`
    display: inline;
    list-style: none;
    float: right;
    padding: 5px;
`;

export const Logo = styled.img`
    float: left;
    height: 40px;
    width: 40px;
`;

export const ListItem = styled.li`
    color: #fff;
    display: inline;
    margin-right: 25px;
    margin-left: 10px;
`


const NavBar = () => {
    return (
        <Row>
            <Logo src={profile} alt="logo"/>
            <Nav>
               <ListItem><a href="/user">Home</a></ListItem>
               <ListItem><a href="/profile">Profile</a></ListItem>
               <ListItem><a href="/friends">Friends</a></ListItem>
               <ListItem><a href="/about">About</a></ListItem>
            </Nav>
        </Row>
           
        
    )
}
export default NavBar;