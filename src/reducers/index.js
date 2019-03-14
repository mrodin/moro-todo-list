import { combineReducers } from 'redux-immutable'

import visibilityFilter from './visibilityFilter'
import todos from './todos'
import loading from './loading'

export default combineReducers({
  visibilityFilter,
  todos,
  isFetching: loading,
})