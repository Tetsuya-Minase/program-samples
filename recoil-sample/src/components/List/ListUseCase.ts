import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { get } from '../usecase/Fetch';
import { todoListState, getTodoListView, TodoListState, TodoListView } from '../model/TodoList';

export const useFetchList = () => {
  const setState = useSetRecoilState<TodoListState>(todoListState);
  useEffect(() => {
    (async () => {
      const result = await get<TodoListState>('http://localhost:8080/api/v1/json');

      if (result instanceof Error) {
        return;
      }
      setState(result);
    })();
  }, []);
};

export const useGetListData = () => {
  return useRecoilValue<TodoListView>(getTodoListView);
};