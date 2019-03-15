import { Map } from 'immutable'

import {
  REMOVE_TODO,
  RENAME_TODO
} from '../actions/todos'

import {
  loadingTodos,
  addingNewTodo,
  switchingTodo
} from '../actions/todos'

export default function todos(state = Map(), action) {
  switch (action.type) {
    case loadingTodos.DONE:
      return Map(action.todos.map(todo => [todo.get('id'), todo]))
    case addingNewTodo.DONE:
      return state.set(action.todo.id, Map(action.todo))
    case switchingTodo.DONE:
      return state.setIn([action.id, 'completed'], !state.getIn([action.id, 'completed']))
    case REMOVE_TODO:
      return state.delete(action.id)
    case RENAME_TODO:
      return state.setIn([action.id, 'text'], action.text)
    default:
      return state
  }
}