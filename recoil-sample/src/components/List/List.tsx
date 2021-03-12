import './List.css';
import { useFetchList, useGetListData } from './ListUseCase';

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
      return <div key={id} className="list__item">
        <dd className="list__value">{id}</dd>
        <dd className="list__value">{value}</dd>
        <dd className="list__value">{completionDate}</dd>
        <dd className="list__value">{completed}</dd>
      </div>
    })}
  </dl>
}