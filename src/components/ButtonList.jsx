import React, {useState} from 'react';
import {ButtonClickCounterClass, ButtonClickCounterFunc, buttons} from './ButtonClickCounter.jsx';


export function ButtonList() {
  const [update, setUpdate] = useState(0);

  function handleListFunc() {
    buttons.push(<ButtonClickCounterFunc />);
    setUpdate(update + 1);
  }

  function handleListClass() {
    buttons.push(<ButtonClickCounterClass />);
    setUpdate(update + 1);
  }

  return (
      <>
        <div className="counter-container">
          {
            buttons.map((btn, i) => btn.type.name === 'ButtonClickCounterFunc'
                ? <ButtonClickCounterFunc key={i} handleListFunc={handleListFunc} />
                : <ButtonClickCounterClass key={i} handleListClass={handleListClass} />
            )
          }

        </div>
        <hr />
      </>
  );
}

