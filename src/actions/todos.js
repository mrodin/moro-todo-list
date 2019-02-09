import {
  getTodos,
  saveTodo
} from '../utils/api'

export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const ADD_TODO = 'ADD_TODO'

// Get all todos
function receiveTodos(todos) {
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

// Add new todo
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function handleAddTodo(text) {
  return (dispatch) => {
    return saveTodo(text)
      .then(todo => dispatch(addTodo(todo)))
  }
}