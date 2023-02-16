import React, {useState} from 'react';
import './App.css';
import {ButtonClickCounterClass} from './components/ButtonClickCounterClass.jsx';
import {ButtonClickCounterFunc} from './components/ButtonClickCounterFunc.jsx';
import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';

export function App() {
  return (
      <>
        <ButtonClickCounterFunc />
        <ButtonClickCounterClass />
        <OpenWeatherAPI />
      </>

  );
}
