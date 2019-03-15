import { takeEvery, put, call, select } from 'redux-saga/effects'

import { getNewTodoText } from '../selectors/todos'

import {
    LOAD_TODOS,
    ADD_TODO
} from '../actions/todos'

import {
    setTodos,
    setTodo
} from '../actions/todos'

import {
    fetchTodos,
    saveTodo
} from '../utils/api'

function* rootSaga() {
    yield takeEvery(LOAD_TODOS, handleTodosLoad)
    yield takeEvery(ADD_TODO, handleAddTodo)
}

function* handleTodosLoad() {
    const todos = yield call(fetchTodos)
    yield put(setTodos(todos))
}

function* handleAddTodo() {
    const todoText = yield select(getNewTodoText)
    const todo = yield call(saveTodo, todoText)
    yield put(setTodo(todo))
}

export default rootSaga