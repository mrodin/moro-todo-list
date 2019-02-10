import {
  getTodos,
  saveTodo,
  checkTodo,
  uncheckTodo,
  deleteTodo
} from '../utils/api'

export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const SWITCH_TODO = 'SWITCH_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

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

// Switch todo

function switchTodo(id) {
  return {
    type: SWITCH_TODO,
    id
  }
}

export function handleCheckTodo(id) {
  return (dispatch) => {
    return checkTodo(id)
      .then(todo => dispatch(switchTodo(todo.id)))
  }
}

export function handleUncheckTodo(id) {
  return (dispatch) => {
    return uncheckTodo(id)
      .then(todo => dispatch(switchTodo(todo.id)))
  }
}

// Remove todo

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function handleRemoveTodo(id) {
  return (dispatch) => {
    return deleteTodo(id)
      .then(() => dispatch(removeTodo(id)))
  }
}