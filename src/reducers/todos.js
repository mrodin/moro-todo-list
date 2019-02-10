import {
  RECEIVE_TODOS,
  ADD_TODO,
  SWITCH_TODO,
  REMOVE_TODO
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
    case SWITCH_TODO:
      const { id } = action
      const todo = state[id]

      return {
        ...state,
        [id]: {
          ...todo,
          completed: !todo.completed
        }
      }
    case REMOVE_TODO:
      const removeId = action.id

      const { [removeId]: value, ...newState } = state

      return {
        ...newState
      }

    default:
      return state
  }
}