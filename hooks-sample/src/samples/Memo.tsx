import React, { useMemo } from 'react';

export const MemoComponent = () => {
  const count = 10000;
  const memoValue = useMemo(() => [...Array(count)].reduce((pure) => pure+1, 0), [count]);
  return <div>{memoValue}</div>
}