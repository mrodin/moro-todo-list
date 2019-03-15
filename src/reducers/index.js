import { combineReducers } from 'redux-immutable'

import visibilityFilter from './visibilityFilter'
import todos from './todos'
import loading from './loading'
import newTodoText from './newTodoText'

export default combineReducers({
  isFetching: loading,
  visibilityFilter,
  todos,
  newTodoText
})