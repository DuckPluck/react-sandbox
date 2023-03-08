import React, {useState} from 'react';
import './App.css';
import {ButtonClickCounterClass} from './components/ButtonClickCounterClass.jsx';
import {ButtonClickCounterFunc} from './components/ButtonClickCounterFunc.jsx';
import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';
import {Timer} from './components/Timer.jsx';
import {Context} from '../context.js';
import {ContextReceiver} from './components/ContextReceiver';

export function App() {
  const [ctx, setCtx] = useState({
    text: 'Context has been received',
    value: 'Do update',
    setValue: () => {
    },
  });

  const value = {ctx, setCtx};

  return (
      <>
        <div className="container">
          <div className="counter-container">
            <ButtonClickCounterFunc />
            <ButtonClickCounterClass />
          </div>
          <OpenWeatherAPI />
          <Timer />
          <Context.Provider value={value}>
            <ContextReceiver />
          </Context.Provider>
        </div>
      </>

  );
}


// TODO: HOOKS (useContext, Reducer)
// TODO: итерировать компоненты (список)
// TODO: refs
// TODO: routing
// TODO: потыкать аккаунты firebase