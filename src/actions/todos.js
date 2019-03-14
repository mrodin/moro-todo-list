import {
  saveTodo,
  checkTodo,
  uncheckTodo,
  deleteTodo,
  updateTodoText
} from '../utils/api'

export const LOAD_TODOS = 'GET_TODOS'
export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const SWITCH_TODO = 'SWITCH_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const RENAME_TODO = 'RENAME_TODO'

// Get all todos from API call
export function loadTodos() {
  return {
    type: LOAD_TODOS
  }
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos
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
      .catch(error => console.error('Error:', error))
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
      .catch(error => console.error('Error:', error))
  }
}

export function handleUncheckTodo(id) {
  return (dispatch) => {
    return uncheckTodo(id)
      .then(todo => dispatch(switchTodo(todo.id)))
      .catch(error => console.error('Error:', error))
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
      .catch(error => console.error('Error:', error))
  }
}

// Rename todo

function renameTodo(id, text) {
  return {
    type: RENAME_TODO,
    id,
    text
  }
}

export function handleRenameTodo(id, text) {
  return (dispatch) => {
    return updateTodoText(id, text)
      .then(() => dispatch(renameTodo(id, text)))
      .catch(error => console.error('Error:', error))
  }
}