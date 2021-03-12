import { DeepMap, FieldError, useForm } from 'react-hook-form';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { TodoItem, TodoItemResponse, TodoListState, todoListState } from '../model/TodoList';
import { post } from '../usecase/Fetch';
const errorMessage = (errors: DeepMap<TodoItem, FieldError>, todoItemKey: keyof TodoItem) => {
  switch (todoItemKey) {
    case 'value':
      return errors.value ? <span>やることは必須です。</span> : null;
    case 'completionDate':
      return errors.completionDate ? <span>完了日は必須です。</span> : null;
    default:
      return null;
  }
}

export const Form = () => {
  const { register, handleSubmit, errors } = useForm<TodoItem>();
  const [, setState] = useRecoilState<TodoListState>(todoListState);
  const submit = useRecoilCallback(({snapshot}) => async (data: TodoItem) => {
    const response = await post<TodoItemResponse, TodoItem>('http://localhost:8080/api/v1/json', data);
    if (response instanceof Error) {
      return;
    }
    const currentState = await snapshot.getPromise(todoListState);
    setState({count: currentState.count + 1, data: [...currentState.data, response.result]});
  }, []);
  
  return <form onSubmit={handleSubmit(submit)}>
    <label>やること：<input name="value" ref={register({ required: true })}></input></label>
    {errorMessage(errors, 'value')}
    <label>完了日：<input type="date" name="completionDate" ref={register({ required: true })}></input></label>
    {errorMessage(errors, 'completionDate')}
    <label>完了/未完了<input type="checkbox" name="isCompleted" ref={register({ setValueAs: value => !!value })}></input></label>
    <button type="submit">登録</button>
  </form>;
};
