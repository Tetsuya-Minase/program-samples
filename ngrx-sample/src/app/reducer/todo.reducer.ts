import { ActionsUnion, add, del, reset, fetch } from '../action/todo.action';

export const initialList: Array<string> = [];

export function todoReducer(state = initialList, action: ActionsUnion): Array<string> {
    switch (action.type) {
        case add.type:
            console.log('state', state);
            console.log('action', action);
            return [...state, action.payload];
        case del.type:
            return state.filter((value, index) => index !== (state.length - 1));
        case reset.type:
            return [];
        case fetch.type:
            return [...action.payload];
        default:
            return state;
    }
}
