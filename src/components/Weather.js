import React from 'react';
import styled from 'styled-components';

export const WeatherContainer = styled.div`
  height: 150px;
  border: 1px solid black;
`

const Weather = (props) => {
  return(
    <WeatherContainer>
      <h2>Weather</h2>
    </WeatherContainer>
  )
}
export default Weather;