import { Map } from 'immutable'

import {
  RECEIVE_TODOS,
  ADD_TODO,
  SWITCH_TODO,
  REMOVE_TODO,
  RENAME_TODO
} from '../actions/todos'

export default function todos(state = Map(), action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return Map(action.todos.map(todo => [todo.id, todo]))
    case ADD_TODO:
      return state.merge({ [action.todo.id]: action.todo })
    case SWITCH_TODO:
      return state.setIn([action.id, 'completed'], !state.getIn([action.id, 'completed']))
    case REMOVE_TODO:
      return state.delete(action.id)
    case RENAME_TODO:
      return state.setIn([action.id, 'text'], action.text)
    default:
      return state
  }
}