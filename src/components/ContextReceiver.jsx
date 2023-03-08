import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../context.js';

export function ContextReceiver() {
  const {ctx, setCtx} = useContext(Context);
  useEffect(() => {
    if (ctx.value !== 'Do update') {
      console.log(`New context value is: ${ctx.value}`);
    }
  }, [ctx]);

  function clickHandler() {
    setCtx({
      ...ctx,
      value: Math.random(),
    });
  }

  return (
      <>
        <div>
          <p>{ctx.text}</p>
          <p>Context random value: {ctx.value}</p>
          <button onClick={clickHandler}>Update</button>
        </div>
      </>
  );
}