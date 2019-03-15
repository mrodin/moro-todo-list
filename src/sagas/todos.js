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

import {
    fetching,
    loadingTodos
} from '../actions/todos'

function* rootSaga() {
    yield takeEvery(ADD_TODO, handleAddTodo)

    const todos = yield call(fetchTodos)
    yield put(loadingTodos.done(todos))
    yield put(fetching.stop())
}

function* handleAddTodo() {
    const todoText = yield select(getNewTodoText)
    const todo = yield call(saveTodo, todoText)
    yield put(setTodo(todo))
}

export default rootSaga