import  { connect }  from 'react-redux'
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/link'
import { Dispatch } from 'redux';
import { IState } from '../commons/interfaces';

const mapStateToProps = (state: IState, ownProps: any) => {
  console.log('ownProps state:', ownProps);
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  console.log('ownProps dispatch:', ownProps);
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink