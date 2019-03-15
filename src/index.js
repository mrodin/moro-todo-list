import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import App from './components/App'

import reducer from './reducers'
import rootSaga from './sagas/todos'
import './scss/index.scss'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

sagaMiddleware.run(rootSaga)

store.dispatch({ type: 'HELLO' })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))