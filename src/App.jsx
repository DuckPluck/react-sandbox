import React from 'react';
import './App.css';
import {ButtonClickCounterClass} from './components/ButtonClickCounterClass.jsx';
import {ButtonClickCounterFunc} from './components/ButtonClickCounterFunc.jsx';
import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';
import {TimerInputForm} from './components/TimerInputForm';

export function App() {
  return (
      <>
        <div className='container'>
          <div className='counter-container'>
            <ButtonClickCounterFunc />
            <ButtonClickCounterClass />
          </div>
          {/*<OpenWeatherAPI />*/}
          <TimerInputForm />
        </div>
      </>

  );
}
