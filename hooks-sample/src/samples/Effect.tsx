import React, { useState ,useEffect } from 'react';

export const EffectComponent: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  // useEffectを使う
  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);
    // intervalをリセットする
    return () => clearInterval(interval);
  // このeffectはcountに依存しているので、countを第二引数に渡す
  // →ここを渡さないとeffect無いではstateが初期値から変わらない
  }, [count]);
  return <div>{count}</div>
};