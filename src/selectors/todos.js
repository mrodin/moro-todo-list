import { createSelector } from 'reselect'

export const getVisibilityFiler = (state) => state.get('visibilityFilter')
export const getTodos = (state) => state.get('todos')
export const getTodoById = (state, id) => state.getIn(['todos', id])

const getVisibleTodos = createSelector(
  getVisibilityFiler,
  getTodos,
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.get('completed'))
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.get('completed'))
      default:
        return todos
    }
  }
)

export const getOrderedVisibleTodos = createSelector(
  getVisibleTodos,
  (visibleTodos) => visibleTodos
    .sort((a, b) => b.get('createdDate') - a.get('createdDate'))
)