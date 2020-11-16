import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #191970;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
    }

    &:hover {
        color: white
    }
`;

const NavBar = () => {
    return (
        <Styles>
            <Navbar expand='lg'>
                <Navbar.Brand href="/">Social Net</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/user">HomePage</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/friends">Friends</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
export default NavBar;