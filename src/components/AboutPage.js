import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 25px;
`

const AboutPage = (props) => {
  return(
    <AboutContainer>
    <h2>About</h2>
      <p>
        Social net was created by Justin Miller in 2021 to allow users to make posts, get the latest new, and what their friends are up too.<br></br>
        Social net was inspired by social media platforms such as Myspace and Facebook.
      </p>
    </AboutContainer>
  )
}
export default AboutPage;