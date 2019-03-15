import { takeEvery, put, call, select } from 'redux-saga/effects'

import { getNewTodoText } from '../selectors/todos'
import { fetching, loadingTodos, addingNewTodo, switchingTodo, removingTodo, renamingTodo } from '../actions/todos'
import { fetchTodos, saveTodo, checkTodo, uncheckTodo, deleteTodo, updateTodoText } from '../utils/api'

function* rootSaga() {

  const todos = yield call(fetchTodos)
  yield takeEvery(addingNewTodo.START, handleAddTodo)
  yield takeEvery(switchingTodo.START, handleSwitchTodo)
  yield takeEvery(removingTodo.START, handleRemoveTodo)
  yield takeEvery(renamingTodo.START, handleRenameTodo)

  yield put(loadingTodos.done(todos))
  yield put(fetching.stop())
}

function* handleAddTodo() {
  const todoText = yield select(getNewTodoText)
  const todo = yield call(saveTodo, todoText)
  yield put(addingNewTodo.done(todo))
}

function* handleSwitchTodo({ id, action }) {
  if (action === 'complete') {
    yield call(checkTodo, id)
    yield put(switchingTodo.done(id))
  }
  if (action === 'incomplete') {
    yield call(uncheckTodo, id)
    yield put(switchingTodo.done(id))
  }
}

function* handleRemoveTodo({ id }) {
  yield call(deleteTodo, id)
  yield put(removingTodo.done(id))
}

function* handleRenameTodo({ id, newText }) {
  yield call(updateTodoText, id, newText)
  yield put(renamingTodo.done(id, newText))
}

export default rootSaga