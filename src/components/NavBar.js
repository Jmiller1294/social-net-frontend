import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


const NavBar = () => {
  return (
    <div>
      <NavLink className="navbar"
        to="/"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >HomePage</NavLink>
      <NavLink
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
