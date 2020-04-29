import React, {useContext} from 'react';

const MemoContext = React.createContext<string>('initial text.');

export const ContextComponent = () => (
	// ここでcontextの現在値がdarkになる
  <MemoContext.Provider value="memo text.">
    <MemoArea />
  </MemoContext.Provider>
);

const MemoArea = () => (
	<div>
		<Text />
	</div>
);

const Text = () => {
  const theme = useContext(MemoContext);
  return (
    <span>{theme}</span>
  );
}