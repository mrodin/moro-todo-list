import { takeEvery, put, call } from 'redux-saga/effects'

import { LOAD_TODOS } from '../actions/todos'
import { fetchTodos } from '../utils/api'
import { setTodos } from '../actions/todos'

function* handleTodosLoad() {
    const todos = yield call(fetchTodos)
    yield put(setTodos(todos))
}

function* watchTodosLoad() {
    yield takeEvery(LOAD_TODOS, handleTodosLoad)
}

export default watchTodosLoad