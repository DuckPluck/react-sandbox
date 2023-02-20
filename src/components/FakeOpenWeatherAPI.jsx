import React, {useEffect, useState} from 'react';
import {OPEN_WEATHER_API_KEY} from '../../config.js';
import {InputForm} from './InputForm.jsx';
import {Loader} from './Loader';

export function FakeOpenWeatherAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => getWeather('Moscow'), [value]);

  function getCityGeo(cityName) {
    setIsLoading(true);

    return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          console.log(data.lat, data.lon);
          setIsLoading(false);
          return [data.lat, data.lon];
        })
        .catch(console.error);
  }

  function getGeoWeather(lat, lon) {
    setIsLoading(true);

    return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setTemp(data.temp);
          setIsLoading(false);
          return temp;
        })
        .catch(console.error);
  }

  // TODO refactor in pure function
  function getWeather(cityName) {
    getCityGeo(cityName)
        .then(([lat, lon]) => getGeoWeather(lat, lon))
        .then((temp) => {
          console.log('getWeather resolved');
          setValue(temp);
        });
  }

  return (
      <div>
        {isLoading ? <Loader /> : <p>{temp}</p>}
        <InputForm getWeather={getWeather} />
      </div>
  );
}