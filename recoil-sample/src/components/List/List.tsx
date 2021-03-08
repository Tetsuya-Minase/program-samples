import { useEffect, useState } from "react"
import { atom, useRecoilState } from "recoil";
import { get } from "../usecase/Fetch";

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
  return <dl>
    {result.map(({key, id, value}) => {
      return <>
        <dt>key</dt>
        <dd>{key}</dd>
        <dt>id</dt>
        <dd>{id}</dd>
        <dt>value</dt>
        <dd>{value}</dd>
      </>
    })}
  </dl>
}