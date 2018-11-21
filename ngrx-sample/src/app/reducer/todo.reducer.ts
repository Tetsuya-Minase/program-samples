import { Action } from '@ngrx/store';
import { ActionTypes } from '../action/todo.action';

export const initialList: Array<string> = [];

export function todoReducer(state = initialList, action: Action): Array<string> {
    switch (action.type) {
        case ActionTypes.Add:
            return [...state, action['payload']['text']];
        case ActionTypes.Delete:
            return state.filter((value, index) => index !== (state.length - 1));
        case ActionTypes.Reset:
            return [];
        default:
            return state;
    }
}
