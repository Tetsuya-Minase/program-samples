import {Action, createAction, union} from '@ngrx/store';

export enum ActionTypes {
    Add = 'TODO_ADD',
    Delete = 'TODO_DELETE',
    Reset = 'TODO_RESET',
    Fetch = 'TODO_FETCH',
    Load = 'TODO_LOAD'
}

export const add = createAction(
    'TODO_ADD',
    (payload: string) => ({ payload })
);
export const del = createAction(
    'TODO_DELETE'
);
export const reset = createAction(
    'TODO_RESET',
);
export const fetch = createAction(
    'TODO_FETCH',
    (payload: Array<string>) => ({payload})
);
export const load = createAction(
    'TODO_LOAD'
);
const actions = union({
    add,
    del,
    reset,
    fetch,
    load
});
export type ActionsUnion = typeof actions;

export class Add implements Action {
    readonly type = ActionTypes.Add;

    constructor(public payload: { text: string }) {
    }
}

export class Delete implements Action {
    readonly type = ActionTypes.Delete;
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}

export class Fetch implements Action {
    readonly type = ActionTypes.Fetch;

    constructor(public payload: { todos: Array<string> }) {
    }
}
