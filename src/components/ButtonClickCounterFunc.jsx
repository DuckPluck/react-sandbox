import React, {useState} from 'react';
import {ButtonClickCounterClass} from './ButtonClickCounterClass.jsx';

export function ButtonClickCounterFunc() {
  const [counter, useCounter] = useState(0);

  function handleClick(e) {
    useCounter(counter + 1);
    console.log(counter + 1, 'left button');
  }

  return (
      <div>
        <button onClick={handleClick}>{counter}</button>
      </div>
  );
}