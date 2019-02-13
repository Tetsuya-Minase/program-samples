export interface ITodoProps {
    completed: boolean;
    id: number;
    onClick: any;
    text: string
}

export interface ITodoListProps {
    todos?: Array<ITodoProps>;
    toggleTodo: any;
}

export interface ILinkProps {
    active: boolean;
    children: string;
    onClick: any;
    filter: string
}

export interface IState {
    todos: Array<any>;
    visibilityFilter: string;
}
