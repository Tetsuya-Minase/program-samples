import { atom, selector } from 'recoil';
export interface TodoItem {
  readonly value: string;
  readonly completionDate: string;
  readonly isCompleted: boolean;
}
export interface TodoItemState {
  readonly id: number;
  readonly value: string;
  readonly completionDate: string;
  readonly isCompleted: boolean;  
}
export interface TodoListState {
  readonly count: number;
  readonly data: Array<TodoItemState>;
}
export interface TodoListView {
  readonly count: number;
  readonly data: Array<{
    readonly id: number;
    readonly value: string;
    readonly completionDate: string;
    readonly completed: string;
  }>;
};

export const todoListState = atom<TodoListState>({
  key: 'TODO_LIST_STATE',
  default: { count: 0, data: [] }
});
export const getTodoListView = selector({
  key: 'TODO_LIST_SELECTOR',
  get: ({ get }): TodoListView => {
    const todoList = get(todoListState);
    return {
      count: todoList.count,
      data: todoList.data.map(data => ({ ...data, completed: data.isCompleted ? '完了' : '未完了' }))
    }
  }
});