import React, {useEffect, useState} from 'react';
import {ButtonClickCounterClass, ButtonClickCounterFunc, buttons} from './ButtonClickCounter.jsx';


export function ButtonList() {
  const [update, setUpdate] = useState(0)

  function handleListFunc() {
    buttons.push(<ButtonClickCounterFunc lassName='btn-func'/>);
    setUpdate(update + 1);
    console.log(buttons);
  }

  function handleListClass() {
    buttons.push(<ButtonClickCounterClass lassName='btn-class'/>);
    setUpdate(update + 1);
    console.log(buttons);
  }

  return (
      <div className='counter-container'>
        {
          buttons.map((btn) => btn.type.name === 'ButtonClickCounterFunc'
              ? <ButtonClickCounterFunc handleListFunc={handleListFunc}/>
              : <ButtonClickCounterClass handleListClass={handleListClass}/>
          )
        }
      </div>
  );
}

