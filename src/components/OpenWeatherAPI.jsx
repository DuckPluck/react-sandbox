import React from 'react';
import {OPEN_WEATHER_API_KEY} from '../../config.js';

export class OpenWeatherAPI extends React.Component {
  lat = 15

  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    // TODO: make input form for search!!
    // TODO: input cityName
    // TODO: (optional) add `q=${cityName},${stateCode},${countryCode}` in url
    // TODO: loader
    // TODO: form filter
    // TODO: HOOKS (useEffect, useContext, Reducer)
    // TODO: routing

    await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Moscow&appid=${OPEN_WEATHER_API_KEY}`)
        .then((res) => res.json())
        .then(data => {
          this.setState({...data[0]});
        })


    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.state.lat}&lon=${this.state.lon}&appid=${OPEN_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          this.setState({...data});
          console.log(this.state);
        })
  }

  render() {
    return (
        <div>
          погода
        </div>
    );
  }
}