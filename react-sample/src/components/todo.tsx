import React, { Component } from 'react';
import { ITodoProps } from '../commons/interfaces';

export default class Todo extends Component<ITodoProps, {}> {

  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    );
  }
}
