import { Map, fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { loadingBarReducer } from 'react-redux-loading'

import {
  RECEIVE_TODOS,
  ADD_TODO,
  SWITCH_TODO,
  REMOVE_TODO,
  RENAME_TODO
} from '../actions/todos'

const todosMap = (state = Map(), action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      // return Map(action.todos.map(todo => [todo.id, todo]))
      return fromJS(action.todos)
    default:
      return state
  }
}

// const todosMap = (state = {}, action) => {
//   switch (action.type) {
//     case RECEIVE_TODOS:
//       return {
//         ...state,
//         ...action.todos
//       }
//     default:
//       return state
//   }
// }

// export default function todos(state = {}, action) {
//   switch (action.type) {
//     case RECEIVE_TODOS:
//       return {
//         ...state,
//         ...action.todos,
//       }
//     case ADD_TODO:
//       return {
//         ...state,
//         [action.todo.id]: action.todo
//       }
//     case SWITCH_TODO:
//       const { id } = action
//       const todo = state[id]

//       return {
//         ...state,
//         [id]: {
//           ...todo,
//           completed: !todo.completed
//         }
//       }
//     case REMOVE_TODO:
//       const { [action.id]: value, ...newState } = state

//       return {
//         ...newState
//       }
//     case RENAME_TODO:
//       return {
//         ...state,
//         [action.id]: {
//           ...state[action.id],
//           text: action.text
//         }
//       }
//     default:
//       return state
//   }
// }

export default combineReducers({
  todos: todosMap,
})