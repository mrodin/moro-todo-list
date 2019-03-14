import { Map } from 'immutable'

import {
  SET_TODOS,
  ADD_TODO,
  SWITCH_TODO,
  REMOVE_TODO,
  RENAME_TODO
} from '../actions/todos'

export default function todos(state = Map(), action) {
  switch (action.type) {
    case SET_TODOS:
      return Map(action.todos.map(todo => [todo.get('id'), todo]))
    case ADD_TODO:
      return state.set(action.todo.id, Map(action.todo))
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