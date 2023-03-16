import React, {useState} from 'react';
import './App.css';
import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';
import {Timer} from './components/Timer.jsx';
import {Context} from '../context.js';
import {ContextParent} from './components/ContextReceiver';
import {ReducerReceiver} from './components/ReducerReceiver';
import {ButtonList} from './components/ButtonList.jsx';
import {RefTextClass, RefTextFunc} from './components/RefText';


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

          <ButtonList />

          <OpenWeatherAPI />

          <Timer />

          <Context.Provider value={value}>
            <ContextParent />
          </Context.Provider>

          <ReducerReceiver />

          <RefTextClass />
          <RefTextFunc />

        </div>
      </>
  );
}

// TODO: refs
// TODO: routing
// TODO: потыкать аккаунты firebase