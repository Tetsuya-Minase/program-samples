import React from 'react';
type Props = {
  dataList: Array<{[key: string]: string}>
};

export const ListComponent: React.FC<Props> = ({dataList}) => {
  return <dl>{dataList.map(({ key, value }) =>
    <React.Fragment key={`${key}${value}`}>
      <dt>key: {key}</dt>
      <dt>value: {value}</dt>
    </React.Fragment>
  )}</dl>
};