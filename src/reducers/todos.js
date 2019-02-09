import {
  RECEIVE_TODOS,
  ADD_TODO
} from '../actions/todos'

export default function todos(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return {
        ...state,
        ...action.todos,
      }
    case ADD_TODO:
      return {
        ...state,
        [action.todo.id]: action.todo
      }
    default:
      return state
  }
}