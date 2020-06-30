import React, { useState, ChangeEvent } from 'react';
import { useRegisterData, useUpdateData, useDelteData } from '../firebase/firebaseDB';

export const FormComponent: React.FC = () => {
  const registerData = useRegisterData();
  const updateData = useUpdateData();
  const deleteData = useDelteData();

  const [keyData, setKeyData] = useState<string>('');
  const [valueData, setValueData] = useState<string>('');

  return <>
    <label>Key: <input placeholder="key" onChange={(event: ChangeEvent<HTMLInputElement>) => setKeyData(event.target.value)}/></label>
    <label>Value: <input placeholder="value" onChange={(event: ChangeEvent<HTMLInputElement>) => setValueData(event.target.value)}/></label>
    <button onClick={() => registerData({[keyData]: valueData})}>登録</button>
    <button onClick={() => updateData({[keyData]: valueData})}>更新</button>
    <button onClick={() => deleteData()}>全消し</button>
  </>;
}