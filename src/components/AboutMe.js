import React from 'react';
import styled from 'styled-components';

export const AboutMeContainer = styled.div`

`

const AboutMe = (props) => {
  return (
    <AboutMeContainer>
      <h2>About Me</h2>
      <hr></hr>
      <p>Age: {props.user.age}</p>
      <p>Hobbies: {props.user.hobbies}</p>
      <p>Hometown: {props.user.hometown}</p>
      <p>Occupation: {props.user.occupation}</p>
    </AboutMeContainer>
  )
}
export default AboutMe;