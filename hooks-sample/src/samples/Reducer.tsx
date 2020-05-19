import React, {useReducer} from 'react';

type State = {count: number};
const initialState: State = {count: 0};

const add = (num: number) => ({type: 'ADD', payload: num});
const subtract = (num: number) => ({type: 'SUBTRACT', payload: num});
type Action = ReturnType<typeof add | typeof subtract>;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return {count: state.count + action.payload};
    case 'SUBTRACT':
      return {count: state.count - action.payload};
    default:
      throw new Error();
  }
}

export const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch(subtract(1))}>-</button>
      <button onClick={() => dispatch(add(1))}>+</button>
    </>
  );
}