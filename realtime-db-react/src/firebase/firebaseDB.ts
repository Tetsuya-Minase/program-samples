import { useMemo, useState, useEffect } from 'react';
import { firebase } from './firebase';

// カスタムフックにしておく
const useDatabase = () => {
  // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  return useMemo(() => firebase.database().ref('/sample'), []);
};
const useFetchData = (ref: firebase.database.Reference) => {
  const [data, setData] = useState<{[key: string]: string}>();
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