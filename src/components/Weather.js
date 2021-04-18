import React from 'react';
import styled from 'styled-components';

export const WeatherContainer = styled.div`
  height: 150px;
  border: 1px solid black;
`
export const WeatherList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding-left: 0;
`

export const WeatherDay = styled.li`
  border: 1px solid black;
  float: left;
  width: 20%;
  height: 100%;
`

const Weather = (props) => {
  return(
    <WeatherContainer>
      <WeatherList>
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
      </WeatherList>
    </WeatherContainer>
  )
}
export default Weather;