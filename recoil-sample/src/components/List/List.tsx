import './List.css';
import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil';
import { get } from '../usecase/Fetch';

type JsonList = {
  readonly key: string;
  readonly data: {
    [key: string]: { id: number, value: string };
  };
}
type JsonData = {
  readonly key: string;
  readonly id: number;
  readonly value: string;
};

const jsonListState = atom<JsonData[]>({
  key: 'jsonList',
  default: []
});

const useFetchList = () => {
  const [response, setResponse] = useRecoilState<JsonData[]>(jsonListState);
  useEffect(() => {
    (async () => {
      const result = await get<JsonList>('http://localhost:8080/api/v1/json/sample');

      if (result instanceof Error) {
        return;
      }
      const resultData: JsonData[] = Object.entries(result.data).map(([key, { id, value }]): JsonData => ({
        key,
        id,
        value
      }));
      setResponse(resultData);
    })();
  }, []);
  return response;
}

export const List = () => {
  const result = useFetchList();
  return <dl className="list">
    <div className="list__label">
      <dt className="list__title">key</dt>
      <dt className="list__title">id</dt>
      <dt className="list__title">value</dt>
    </div>
    {result.map(({ key, id, value }) => {
      return <div className="list__item">
        <dd className="list__value">{key}</dd>
        <dd className="list__value">{id}</dd>
        <dd className="list__value">{value}</dd>
      </div>
    })}
  </dl>
}