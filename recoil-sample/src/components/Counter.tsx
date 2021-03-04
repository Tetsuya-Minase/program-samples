import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
const countState = atom({
  key: 'count',
  default: 0
});
const selectEvenNumber = selector({
  key: 'selectEvenNumber',
  get: ({get}) => {
    const count = get(countState);
    return count % 2 === 0 ? 'Yes' : 'No';
  }
});
const useCountClick = () => {
  const [count, setCount] = useRecoilState<number>(countState);
  const onClick = () => setCount(count + 1);
  return <button onClick={onClick}>+1</button>
}
const useCheckCount = () => {
  const [count,] = useRecoilState<number>(countState);
  const isEven = useRecoilValue(selectEvenNumber);
  return <div>
    is {count} even? {isEven}
  </div>
}

export const Counter = () => {
  return (
    <>
      {useCountClick()}
      {useCheckCount()}
    </>
  )
}
