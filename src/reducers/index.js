import { combineReducers } from 'redux-immutable'

import visibilityFilter from './visibilityFilter'
import todos from './todos'

export default combineReducers({
  visibilityFilter,
  todos,
})