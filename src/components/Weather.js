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

  getIcon(WeatherType) {
    if(WeatherType === 'Clouds') {
      return 'cloud';
    }
    else if(WeatherType === 'Clear'){
      return 'sunny';
    }
    else if(WeatherType === 'Rain'){
      return 'rainy';
    }
    else if(WeatherType === 'thunder'){
      return 'thunderstorm';
    }
  }

  render() {
    console.log(this.props)
    if(this.props && this.props.weather) {
    return(
      <WeatherContainer>
        <p>
          {this.getDate()}
          <br></br>
          Current Temp: {Math.round(this.props.weather.temp)}<span>&#8457;</span>
          <br></br>
          <Icon>
            <ion-icon name={this.getIcon(this.props.weather.weather[0].main)}></ion-icon>
          </Icon>
        </p>
      </WeatherContainer>
    )
    }
    else {
      return(
        <div>
          Not Found
        </div>
      ) 
    }
  }
}
export default Weather;