import React, {useEffect, useState} from 'react';
import {OPEN_WEATHER_API_KEY} from '../../config.js';
import {OpenWeatherInputForm} from './OpenWeatherInputForm.jsx';
import {Loader} from './Loader';

export function OpenWeatherAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [mainInfo, setMainInfo] = useState('');
  const [cityName, setCityName] = useState('');

  useEffect(() => getWeather('Moscow'), []);

  function getCityGeo(cityName) {
    setIsLoading(true);

    return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          setCityName(data[0].name)
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
          setMainInfo(data.main);
          setIsLoading(false);
          console.log(cityName);
          return mainInfo;
        })
        .catch(err => {
          alert(err);
          setIsLoading(false);
        });
  }

  function getWeather(cityName) {
    getCityGeo(cityName)
        .then(([lat, lon]) => {
          return getGeoWeather(lat, lon);
        })
        .then(() => {
          console.log(`Weather in ${cityName} is ${mainInfo.temp} °C`);
          console.log(mainInfo);
        });
  }

  return (
      <div className='weather-container'>
        {isLoading ? <Loader /> : <p>{cityName}: {mainInfo.temp} °C</p>}
        <OpenWeatherInputForm getWeather={getWeather} />
      </div>
  );
}