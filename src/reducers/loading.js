import {
    LOAD_TODOS,
    SET_TODOS
} from '../actions/todos'

export default function loading(state = false, action) {
    switch (action.type) {
        case LOAD_TODOS:
            return true
        case SET_TODOS:
            return false
        default:
            return state
    }
}