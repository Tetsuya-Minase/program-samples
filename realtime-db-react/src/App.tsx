import React, { useMemo } from 'react';
import { ListComponent } from './components/ListComponent';
import { useFetchAllData, useDatabaseDocument } from './firebase/firebaseDB';
import { FormComponent } from './components/FormComponent';

const App: React.FC = () => {
  const { data } = useFetchAllData();
  const setDocument = useDatabaseDocument();
  const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);
  return (
  <>
    <ListComponent dataList={dataList}/>
    <FormComponent setDocument={setDocument} />
  </>
  );
}

export default App;
