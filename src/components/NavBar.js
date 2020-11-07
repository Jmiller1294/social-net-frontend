import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '6px 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


const NavBar = () => {
  return (
    <div className="topnav">
      <NavLink className="navbar"
        to="/users/:id"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >UserPage</NavLink >
      <NavLink className="navbar"
        to="/profile"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Profile</NavLink>
    </div>
  );
};

export default NavBar;
