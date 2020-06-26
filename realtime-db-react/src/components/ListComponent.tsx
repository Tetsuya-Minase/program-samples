import React, { useMemo } from 'react';
import { useFetchAllData } from '../firebase/firebaseDB';

export const ListComponent: React.FC = () => {
  const { data } = useFetchAllData();
  const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);
  console.log(dataList);
  return <dl>{dataList.map(({ key, value }) =>
    <React.Fragment key={`${key}${value}`}>
      <dt>key: {key}</dt>
      <dt>value: {value}</dt>
    </React.Fragment>
  )}</dl>
};