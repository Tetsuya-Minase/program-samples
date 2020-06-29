import React, { useState, ChangeEvent } from 'react';

type Props = {
  setDocument: (registerData: {[key: string]: string}) => void
}

export const FormComponent: React.FC<Props> = ({setDocument}) => {
  const [keyData, setKeyData] = useState<string>('');
  const [valueData, setValueData] = useState<string>('');
  return <>
    <label>Key: <input placeholder="key" onChange={(event: ChangeEvent<HTMLInputElement>) => setKeyData(event.target.value)}/></label>
    <label>Value: <input placeholder="value" onChange={(event: ChangeEvent<HTMLInputElement>) => setValueData(event.target.value)}/></label>
    <button onClick={() => setDocument({[keyData]: valueData})}>登録</button>
  </>;
}