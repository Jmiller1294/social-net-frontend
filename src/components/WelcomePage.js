import React from 'react';
import background1 from '../assets/background1.jpg'


const Welcome = () => {

    return ( 
        <div className="welcome">
          <img className="background" alt="" src={background1}/>
          <h1>Welcome to Social Net</h1>
        </div>
    )
}
export default Welcome;