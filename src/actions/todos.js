import {
  deleteTodo,
  updateTodoText
} from '../utils/api'

export const fetching = {
  START: 'FETCHING_START',
  STOP: 'FETCHING_STOP',
  start: () => ({
    type: fetching.START
  }),
  stop: () => ({
    type: fetching.STOP
  })
}

export const loadingTodos = {
  START: 'TODOS_LOADING_START',
  DONE: 'TODOS_LOADING_DONE',
  start: () => ({
    type: loadingTodos.START
  }),
  done: (todos) => ({
    type: loadingTodos.DONE,
    todos
  })
}

export const addingNewTodo = {
  START: 'TODO_ADDING_START',
  DONE: 'TODO_ADDING_DONE',
  start: () => ({
    type: addingNewTodo.START
  }),
  done: (todo) => ({
    type: addingNewTodo.DONE,
    todo
  })
}

export const switchingTodo = {
  START: 'TODO_SWITCHING_START',
  DONE: 'TODO_SWITCHING_DONE',
  start: (id, action) => ({
    type: switchingTodo.START,
    id,
    action
  }),
  done: (id) => ({
    type: switchingTodo.DONE,
    id
  })
}

export const REMOVE_TODO = 'REMOVE_TODO'
export const RENAME_TODO = 'RENAME_TODO'
export const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT'

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

// Update new todo text
export function updateNewTodoText(todoText) {
  return {
    type: UPDATE_NEW_TODO_TEXT,
    todoText
  }
}