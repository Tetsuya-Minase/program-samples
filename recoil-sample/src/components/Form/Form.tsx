import './Form.css';
import { DeepMap, FieldError, useForm } from 'react-hook-form';
import { TodoItem } from '../model/TodoList';
import { useSubmit } from './FormUseCase';
const errorMessage = (errors: DeepMap<TodoItem, FieldError>, todoItemKey: keyof TodoItem) => {
  switch (todoItemKey) {
    case 'value':
      return errors.value ? <span className="form__error">やることは必須です。</span> : null;
    case 'completionDate':
      return errors.completionDate ? <span className="form__error">完了日は必須です。</span> : null;
    default:
      return null;
  }
}

export const Form = () => {
  const { register, handleSubmit, errors } = useForm<TodoItem>();  
  const submit = useSubmit();
  return <form className="form" onSubmit={handleSubmit(submit)}>
    <label className="form__item">やること：<input name="value" ref={register({ required: true })}></input></label>
    {errorMessage(errors, 'value')}
    <label className="form__item">完了日：<input type="date" name="completionDate" ref={register({ required: true })}></input></label>
    {errorMessage(errors, 'completionDate')}
    <label className="form__item">完了済<input type="checkbox" name="isCompleted" ref={register({ setValueAs: value => !!value })}></input></label>
    <button type="submit">登録</button>
  </form>;
};
