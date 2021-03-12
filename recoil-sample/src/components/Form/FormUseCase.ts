import { useRecoilCallback, useRecoilState } from "recoil";
import { TodoItem, TodoItemResponse, todoListState, TodoListState } from "../model/TodoList";
import { post } from "../usecase/Fetch";

export const useSubmit = () => {
  const [, setState] = useRecoilState<TodoListState>(todoListState);
  const submit = useRecoilCallback(({snapshot}) => async (data: TodoItem) => {
    const response = await post<TodoItemResponse, TodoItem>('http://localhost:8080/api/v1/json', data);
    if (response instanceof Error) {
      return;
    }
    const currentState = await snapshot.getPromise(todoListState);
    setState({count: currentState.count + 1, data: [...currentState.data, response.result]});
  }, []);
  return submit;
};
