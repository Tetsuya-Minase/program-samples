import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import { VisibilityFilters } from '../actions/index'
import TodoList from '../components/todoList'
import { IState, ITodoProps } from '../commons/interfaces';
import { Dispatch } from 'redux';

function getVisibleTodos(todos: Array<ITodoProps>, filter: string): Array<ITodoProps> {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: IState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch: Dispatch) =>({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
  })


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
