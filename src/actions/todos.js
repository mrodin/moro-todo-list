import { getTodos } from '../utils/api'

export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

export function handleReceiveTodos() {
  return (dispatch) => {
    return getTodos()
      .then(({ todos }) => {
        dispatch(receiveTodos(todos))
      })
  }
}