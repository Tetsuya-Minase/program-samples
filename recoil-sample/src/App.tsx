import './App.css';
import { RecoilRoot } from 'recoil';
import { Counter } from './components/Counter';
import { List } from './components/List/List';
import { Form } from './components/Form/Form';

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <List />
      <Form />
    </RecoilRoot>
  );
}

export default App;
