import React, { useCallback, useState } from 'react';

export const CallbackComponent = () => {
  const [count, setCount] = useState(0);
  const buttonClick = useCallback(() => setCount(count + 1), [count]);
  return <ButtonComponent count={count} buttonClick={buttonClick} />
}
const ButtonComponent = ({ count, buttonClick }: { count: number, buttonClick: () => void }) => (
  <div>
    count: {count}
    <button onClick={buttonClick}>click</button>
  </div>
)