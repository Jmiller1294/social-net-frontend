import React, { Component } from 'react';
import styled from 'styled-components';

export const WeatherContainer = styled.div`
  height: 150px;
  text-align: center;
  font-size: 24px;
`

export const Icon = styled.span`
  font-size: 50px;
`

class Weather extends Component {

  getDate() {
    let today = new Date();
    let date = (today.getMonth()+1) + '/' + today.getDate();
    return date
  }

  render() {
    return(
      <WeatherContainer>
        {console.log(this.props.weather)}
        <p>
          {this.getDate()}
          <br></br>
          Current Temp: {Math.round(this.props.weather.temp)}<span>&#8457;</span>
          <br></br>
          <Icon>
            <ion-icon name="cloud"></ion-icon>
          </Icon>
        </p>
      </WeatherContainer>
    )
  }
}
export default Weather;