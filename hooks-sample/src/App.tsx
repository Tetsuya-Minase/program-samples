import React from 'react';
import './App.css';
import { StateComponent } from './samples/State';
import { EffectComponent } from './samples/Effect';
import { ContextComponent } from './samples/Context';
import { ReducerComponent } from './samples/Reducer';

function App() {
  return (
    <>
      <StateComponent />
      <EffectComponent />
      <ContextComponent />
      <ReducerComponent />
    </>
  );
}

export default App;
