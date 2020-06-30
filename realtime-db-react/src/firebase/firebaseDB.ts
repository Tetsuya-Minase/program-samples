import { useMemo, useState, useEffect, useCallback } from 'react';
import { firebase } from './firebase';

// カスタムフックにしておく
const useDatabase = () => {
  // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  return useMemo(() => firebase.database().ref(`/sample/`), []);
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

export const useRegisterData = () => {
  const ref = useDatabase();
  const setDocument = useSetDocument(ref);
  const {data: registeredData} = useFetchAllData();
  
  const registerData = useCallback((registerData: { [key: string]: string }) => {
    setDocument({...registeredData, ...registerData});
  }, [setDocument, registeredData]);

  return registerData;
};

const useUpdateDocument = (ref: firebase.database.Reference) => {
  const updateDocument = useCallback((document: Object) => ref.update(document), [ref]);
  return updateDocument;
}

export const useUpdateData = () => {
  const ref = useDatabase();
  const updateDocument = useUpdateDocument(ref);
  const updateData = useCallback((registerData: {[key: string]: string}) => {
    updateDocument(registerData);
  }, [updateDocument]);
  return updateData;
}

const useRemoveDocument = (ref: firebase.database.Reference) => {
  const deleteDocument = useCallback(() => ref.remove(), [ref]);
  return deleteDocument;
}
export const useDelteData = () => {
  const ref = useDatabase();
  const removeDocument = useRemoveDocument(ref);
  const deleteData = useCallback(() => removeDocument(), [removeDocument])
  return deleteData;
}