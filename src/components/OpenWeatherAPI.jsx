import React from 'react';
import {OPEN_WEATHER_API_KEY} from '../../config.js';
import {InputForm} from './InputForm.jsx';
import {Loader} from './Loader';

export class OpenWeatherAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO: refactor fetch with useEffect
    // TODO: (optional) add `q=${cityName},${stateCode},${countryCode}` in url
    // TODO: form filter
    // TODO: HOOKS (useEffect, useContext, Reducer)
    // TODO: routing
    this.getWeather('Moscow');
  }

  getCityGeo = (cityName) => {
    this.setState({isLoading: true});
    return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`)
  };

  getGeoWeather = (lat, lon) => {
    this.setState({isLoading: true});
    return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`)
  };

  getWeather = (cityName) => {
    console.log('first');
    this.getCityGeo(cityName)
        .then((res) => res.json())
        .then(data => {
          this.setState({
            isLoading: false,
            lat: data.lat,
            lon: data.lon,
          });
          console.log('getCityGeo resolved', this.state.lat, this.state.lon);
          return [data.lat, data.lon];
        })
        .then(([lat, lon]) => {
          console.log('second');
          this.getGeoWeather(lat, lon)
              .then(res => res.json())
              .then(data => {
                this.setState({isLoading: false});
                console.log('getGeoWeather resolved');
                return data.temp;
              })
              .then(() => console.log('getWeather resolved'));
        });
  };

  render() {
    return (
        <div>
          {this.state.isLoading ? <Loader /> : <p>this.state.data.temp</p>}
          <InputForm getWeather={this.getWeather} />
        </div>
    );
  }
}