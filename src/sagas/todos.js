import { takeEvery, put } from 'redux-saga/effects'

function* workerSaga() {
    console.log('Hello from worker')
    yield put({ type: 'ACTION_FROM_WORKER' })
}

function* rootSaga() {
    yield takeEvery('HELLO', workerSaga)
}

export default rootSaga