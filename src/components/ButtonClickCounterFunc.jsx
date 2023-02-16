import React, {useState} from 'react';
import {ButtonClickCounterClass} from './ButtonClickCounterClass.jsx';

export function ButtonClickCounterFunc() {
  const [counter, useCounter] = useState(0);

  function handleClick(e) {
    useCounter(counter + 1);
    console.log(counter);
  }

  return (
      <div>
        <button onClick={handleClick}>Click me!</button>
      </div>
  );
}