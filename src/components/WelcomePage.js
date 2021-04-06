import React from 'react';
import background1 from '../assets/background1.jpg';
import styled from 'styled-components';

export const Header = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
    color: black;
  `

const Welcome = () => {

    return ( 
        <div className="welcome">
          <img className="background" alt="" src={background1}/>
          <Header>Welcome to Social Net</Header>
        </div>
    )
}
export default Welcome;