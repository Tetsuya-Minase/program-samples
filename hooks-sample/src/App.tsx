import React from 'react';
import './App.css';
import { StateComponent } from './samples/State';
import { EffectComponent } from './samples/Effect';
import { ContextComponent } from './samples/Context';

function App() {
  return (
    <>
      <StateComponent />
      <EffectComponent />
      <ContextComponent />
    </>
  );
}

export default App;
