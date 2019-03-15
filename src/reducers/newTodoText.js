import { UPDATE_NEW_TODO_TEXT } from '../actions/todos'

export default function newTodoText(state = '', action) {
    switch (action.type) {
        case UPDATE_NEW_TODO_TEXT:
            return action.todoText
        default:
            return state
    }
}