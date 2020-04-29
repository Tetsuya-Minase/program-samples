import React from 'react';
import './App.css';
import { StateComponent } from './samples/State';
import { EffectComponent } from './samples/Effect';
import { ContextComponent } from './samples/Context';
import { ReducerComponent } from './samples/Reducer';
import { CallbackComponent } from './samples/Callback';
import { MemoComponent } from './samples/Memo';

function App() {
  return (
    <>
      <StateComponent />
      <EffectComponent />
      <ContextComponent />
      <ReducerComponent />
      <CallbackComponent />
      <MemoComponent />
    </>
  );
}

export default App;
