import React, { Component } from 'react'
import Todo from './todo';
import { ITodoListProps } from '../commons/interfaces';

export default class TodoList extends Component<ITodoListProps, {}> {

  render() {
    if (this.props.todos === null || this.props.todos === undefined) {
      return;
    }
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => this.props.toggleTodo(index)} />
        ))}
      </ul>
    );
  }
}
