import React, {useState} from 'react';
import './App.css';

export function App() {
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
