import React, { useState, ChangeEvent } from 'react';
import { useSetData } from '../firebase/firebaseDB';

export const FormComponent: React.FC = () => {
  const setDocument = useSetData();

  const [keyData, setKeyData] = useState<string>('');
  const [valueData, setValueData] = useState<string>('');
  return <>
    <label>Key: <input placeholder="key" onChange={(event: ChangeEvent<HTMLInputElement>) => setKeyData(event.target.value)}/></label>
    <label>Value: <input placeholder="value" onChange={(event: ChangeEvent<HTMLInputElement>) => setValueData(event.target.value)}/></label>
    <button onClick={() => setDocument({[keyData]: valueData})}>登録</button>
  </>;
}