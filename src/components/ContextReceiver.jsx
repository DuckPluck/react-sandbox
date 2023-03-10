import React, {useContext, useEffect, useState, memo} from 'react';
import {Context} from '../../context.js';

export function ContextParent() {
  const {ctx, setCtx} = useContext(Context);

  useEffect(() => console.log('Context Parent rendered'));

  function memoHandler() {
    setCtx({
      ...ctx,
      isMemo: true,
    })
  }

  return (
      <div className='border-box'>
        <p>Context Parent</p>
        <button onClick={memoHandler}>memo Context broker is {ctx.isMemo ? 'on' : 'off'}</button>
        {ctx.isMemo ? <ContextBrokerMemo/> : <ContextBroker/>}

      </div>
  );
}


export function ContextBroker() {
  useEffect(() => console.log('Context Broker rendered (!)'));
  return (
      <div className='border-box'>
        <p>Context broker</p>
        <ContextReceiver/>
      </div>
  )
}
export const ContextBrokerMemo = memo(ContextBroker);


export function ContextReceiver() {
  const {ctx, setCtx} = useContext(Context);

  useEffect(() => console.log('Context Receiver rendered'));

  useEffect(() => {
    if (ctx.value !== 'Do update') {
      console.log(`New context value is: ${ctx.value}`);
    }
  }, [ctx]);

  function updateHandler() {
    setCtx({
      ...ctx,
      value: Math.random(),
    });
  }


  return (
      <>
        <div className='border-box'>
          <p>{ctx.title}</p>
          <p>Context random value: {ctx.value}</p>
          <button onClick={updateHandler}>Update</button>
        </div>
      </>
  );
}