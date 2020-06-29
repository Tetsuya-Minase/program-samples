import { useMemo, useState, useEffect, useCallback } from 'react';
import { firebase } from './firebase';

// カスタムフックにしておく
const useDatabase = () => {
  // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  return useMemo(() => firebase.database().ref('/sample'), []);
};
const useFetchData = (ref: firebase.database.Reference) => {
  const [data, setData] = useState<{ [key: string]: string }>();
  useEffect(() => {
    ref.on('value', snapshot => {
      if (snapshot && snapshot.val()) {
        setData(snapshot.val());
      }
    });
    return () => {
      ref.off();
    };
  }, [ref]);
  return { data };
}
export const useFetchAllData = () => {
  const ref = useDatabase();
  return useFetchData(ref);
};

const useSetDocument = (ref: firebase.database.Reference) => {
  const updateDocument = useCallback(
    (document: unknown) => {
      ref.set(document);
    }, [ref]
  );
  return updateDocument;
};

export const useDatabaseDocument = () => {
  const ref = useDatabase();
  const updateDocument = useSetDocument(ref);
  const {data: registeredData} = useFetchAllData();
  const setDocuments = useCallback((registerData: { [key: string]: string }) => updateDocument({...registeredData, registerData}), [updateDocument]);

  return setDocuments;
};