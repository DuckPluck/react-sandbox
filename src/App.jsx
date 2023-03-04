import React from 'react';
import './App.css';
import {ButtonClickCounterClass} from './components/ButtonClickCounterClass.jsx';
import {ButtonClickCounterFunc} from './components/ButtonClickCounterFunc.jsx';
import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';
import {Timer} from './components/Timer.jsx';

export function App() {
  return (
      <>
        <div className='container'>
          <div className='counter-container'>
            <ButtonClickCounterFunc />
            <ButtonClickCounterClass />
          </div>
          <OpenWeatherAPI />
          <Timer />
        </div>
      </>

  );
}

// TODO: конспект context
// TODO: HOOKS (useContext, Reducer)
// TODO: routing
// TODO: потыкать аккаунты firebase