import React from 'react';
import background from '../assets/background.jpg';
import styled from 'styled-components';


export const Grid = styled.div`
 
`;

export const Row = styled.div`
  display: flex;
`;

export const WelcomePageContainer = styled.div`
  width: 100%; 
  height: 100%;
  position relative;
`

export const Header = styled.h1`
  font-size: 70px;
  position: absolute;
  top: 15%;
  left: 25%;
  color: black;
  text-align: center;
`

export const BackgroundImage = styled.img`
  width: 100%;
  flex: 1;
  height: 100vh;
  min-height : 100vh;
  opacity: .5;
  overflow-x: hidden;
`



const Welcome = () => {

    return ( 
      <Grid>
        <Row>
            <WelcomePageContainer>
              <BackgroundImage alt="background" src={background}/>
              <Header>Welcome to Social Net</Header>
            </WelcomePageContainer>
        </Row>
      </Grid>
    )
}
export default Welcome;