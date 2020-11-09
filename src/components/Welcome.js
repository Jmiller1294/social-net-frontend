import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../assets/profile.jpg'
import background1 from '../assets/background1.jpg'


const Welcome = () => {

    return ( 
        <div className="welcome">
          <img className="background" src={background1}/>
          <h1>Welcome to Social Net</h1>
        </div>
    )
}
export default Welcome;