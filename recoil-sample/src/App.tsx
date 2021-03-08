import './App.css';
import { RecoilRoot } from 'recoil';
import { Counter } from './components/Counter';
import { List } from './components/List/List';

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <List />
    </RecoilRoot>
  );
}

export default App;
