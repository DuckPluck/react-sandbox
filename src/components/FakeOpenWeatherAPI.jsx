import React, {useEffect, useState} from 'react';
import {OPEN_WEATHER_API_KEY} from '../../config.js';
import {InputForm} from './InputForm.jsx';
import {Loader} from './Loader';

// TODO можно использовать обратный гео для вывода города рядом с температурой

export function FakeOpenWeatherAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => getWeather('Moscow'), [value]);

  function getCityGeo(cityName) {
    setIsLoading(true);

    return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          console.log(data[0].lat, data[0].lon);
          setIsLoading(false);
          return [data[0].lat, data[0].lon];
        })
        .catch(err => {
          alert(err);
          setIsLoading(false);
        });
  }

  function getGeoWeather(lat, lon) {
    setIsLoading(true);

    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setWeatherInfo(data.main);
          setIsLoading(false);
          return weatherInfo;
        })
        .catch(err => {
          alert(err);
          setIsLoading(false);
        });
  }

  function getWeather(cityName) {
    getCityGeo(cityName)
        .then(([lat, lon]) => getGeoWeather(lat, lon))
        .then((weather) => {
          console.log('getWeather resolved');
          setValue(weather);
        })
  }

  return (
      <div>
        {isLoading ? <Loader /> : <p>{weatherInfo.cityName}: {weatherInfo.temp} °C</p>}
        <InputForm getWeather={getWeather} />
      </div>
  );
}