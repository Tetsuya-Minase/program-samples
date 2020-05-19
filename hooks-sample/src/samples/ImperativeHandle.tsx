import React, { forwardRef, useRef, useImperativeHandle, RefObject } from 'react';

const FancyInput = (props: any, ref: any) => {
  // refを定義
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  // 受け取ったrefにfocus関数を追加する
  useImperativeHandle(ref, () => ({
    focus: () => inputRef?.current?.focus()
    
  }));
  return <input ref={inputRef} />;
}
// forwardRefに作った関数を渡す(変数に置かなくても問題なし)
const FancyInputRef = forwardRef(FancyInput);

export const ImperativeHandleComponent: React.FC = () => {
  // ここで使うrefを定義
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  return (<>
    {/* refを渡す(このrefにfocus関数が追加される) */}
    <FancyInputRef ref={ref} />
    {/* クリックした時にテキストボックスにフォーカスする */}
    <button onClick={() => ref?.current?.focus()}>clickでフォーカス</button>
  </>)

};