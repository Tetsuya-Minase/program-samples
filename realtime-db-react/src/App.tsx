import React  from 'react';
import { ListComponent } from './components/ListComponent';
import { FormComponent } from './components/FormComponent';
import { FirebaseAuthComponent } from './firebase/FirebaseAuthComponent';

const App: React.FC = () => {
  return (
  <>
    <FirebaseAuthComponent />
    <ListComponent/>
    <FormComponent />
  </>
  );
}

export default App;
