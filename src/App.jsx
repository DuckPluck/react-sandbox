import React, {useState} from 'react';
import './App.css';
import {ButtonClickCounterClass} from './components/ButtonClickCounterClass.jsx';
import {ButtonClickCounterFunc} from './components/ButtonClickCounterFunc.jsx';
import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';
import {Timer} from './components/Timer.jsx';
import {Context} from '../context.js';
import {ContextParent} from './components/ContextReceiver';


export function App() {
  const [ctx, setCtx] = useState({
    isMemo: false,
    title: 'Context receiver',
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
            <ContextParent/>
          </Context.Provider>

        </div>
      </>
  );
}

// TODO: useMemo (надо еще сделать чтобы по кнопке включался и выключался)
// TODO: Reducer
// TODO: итерировать компоненты (список)
// TODO: refs
// TODO: routing
// TODO: потыкать аккаунты firebase