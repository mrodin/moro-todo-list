import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import visibilityFilter from './visibilityFilter'
import todos from './todos'

export default combineReducers({
  visibilityFilter,
  todos,
  loadingBar: loadingBarReducer
})