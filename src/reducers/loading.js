import {
  fetching
} from '../actions/todos'

export default function loading(state = true, action) {
  switch (action.type) {
    case fetching.START:
      return true
    case fetching.STOP:
      return false
    default:
      return state
  }
}