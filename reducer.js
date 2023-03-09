export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
};

export const initState = {
  value: 0,
}

export function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.INCREMENT:
      console.log(`Reducer: value is incremented by 1`);
      return {...state, value: state.value + 1};

    case ACTIONS.DECREMENT:
      console.log(`Reducer: value is decremented by 1`);
      return {...state, value: state.value - 1};

    case ACTIONS.MULTIPLY:
      console.log(`Reducer: value is multiplied by 2`);
      return {...state, value: state.value * 2};

    case ACTIONS.DIVIDE:
      console.log(`Reducer: value is divided by 2`);
      return {...state, value: state.value / 2};

    default: throw new Error('Reducer error')
  }
}

