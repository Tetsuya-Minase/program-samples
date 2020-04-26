import React, { useState } from 'react';

export const StateComponent: React.FC<any> = () => {
  // useStateを使う
  const [greetingMessage, setGreetingMessage] = useState<string>('hello');
  return (
    <>
      {/* stateの内容を表示 */}
      <div>{greetingMessage}</div>
      <form>
        {/* stateの内容を更新 */}
        <input type="text" onChange={text => setGreetingMessage(text.target.value)} />
      </form>
    </>
  )
};