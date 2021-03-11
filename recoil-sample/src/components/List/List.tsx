import './List.css';
import { useEffect } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { get } from '../usecase/Fetch';

type TodoListState = {
  readonly count: number;
  readonly data: Array<{
    readonly id: number;
    readonly value: string;
    readonly completionDate: string;
    readonly isCompleted: boolean;
  }>;
}
type TodoListView = {
  readonly count: number;
  readonly data: Array<{
    readonly id: number;
    readonly value: string;
    readonly completionDate: string;
    readonly completed: string;
  }>;
};

const todoListState = atom<TodoListState>({
  key: 'TODO_LIST_STATE',
  default: { count: 0, data: [] }
});
const getTodoListView = selector({
  key: 'TODO_LIST_SELECTOR',
  get: ({ get }): TodoListView => {
    const todoList = get(todoListState);
    return {
      count: todoList.count,
      data: todoList.data.map(data => ({ ...data, completed: data.isCompleted ? '完了' : '未完了' }))
    }
  }
});

const useFetchList = () => {
  const [, setState] = useRecoilState<TodoListState>(todoListState);
  useEffect(() => {
    (async () => {
      const result = await get<TodoListState>('http://localhost:8080/api/v1/json/sample');

      if (result instanceof Error) {
        return;
      }
      setState(result);
    })();
  }, []);
}
const useGetListData = () => {
  return useRecoilValue<TodoListView>(getTodoListView);
}

export const List = () => {
  useFetchList();
  const result = useGetListData();
  return <dl className="list">
    <div className="list__label">
      <dt className="list__title">id</dt>
      <dt className="list__title">やること</dt>
      <dt className="list__title">完了日</dt>
      <dt className="list__title">状態</dt>
    </div>
    {result.data.map(({ id, value, completionDate, completed }) => {
      return <div className="list__item">
        <dd className="list__value">{id}</dd>
        <dd className="list__value">{value}</dd>
        <dd className="list__value">{completionDate}</dd>
        <dd className="list__value">{completed}</dd>
      </div>
    })}
  </dl>
}