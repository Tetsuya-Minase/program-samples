import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'TODO_ADD',
    Delete = 'TODO_DELETE',
    Reset = 'TODO_RESET'
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
    constructor(public payload: { text: string }) { }
}
export class Delete implements Action {
    readonly type = ActionTypes.Delete;
}
export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}
