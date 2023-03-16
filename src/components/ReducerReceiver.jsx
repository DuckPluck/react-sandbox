import React, {useEffect, useReducer} from 'react';
import {reducer, initState, ACTIONS} from '../../reducer.js';

export function ReducerReceiver() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
      <>
      <div>
        <p>Reducer state is: {state.value}</p>
        <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+ 1</button>
        <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>- 1</button>
        <button onClick={() => dispatch({type: ACTIONS.MULTIPLY})}>* 2</button>
        <button onClick={() => dispatch({type: ACTIONS.DIVIDE})}>/ 2</button>
      </div>
      <hr />
      </>
  );
}