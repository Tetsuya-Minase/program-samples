import React, { useRef, RefObject } from 'react';

export const RefComponent: React.FC = () => {
  // Dom触るためのrefを作成
  const useRefWithDom: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  // 値を保持しておくrefを作成
  const useRefWithValue = useRef('initial value');
  return (
      <div>
        <input type="text" ref={useRefWithDom} />
        <button onClick={() => {
          if (!useRefWithDom.current) {
            return;
          }
          // 変更前('initial value')
          console.log('useRefWithValue.current: ', useRefWithValue.current);
          // currentを上書きすることで変更できる
          useRefWithValue.current = useRefWithDom.current.value;
          // 変更後('hoge')
          console.log('useRefWithValue.current: ', useRefWithValue.current);
          
        }}>ボタン</button>
      </div>
  );
};