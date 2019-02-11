import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Task from './Task'
import InputBar from './InputBar'
import FilterBar from './FilterBar'

class TodoList extends Component {
  render() {
    const { visibilityFilter, tasks } = this.props

    function getVisibleTodos(visibilityFilter, tasks) {
      switch (visibilityFilter) {
        case 'SHOW_ALL':
          return tasks
        case 'SHOW_ACTIVE':
          return tasks.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED':
          return tasks.filter(todo => todo.completed)
        default:
          return tasks
      }
    }

    const visibleTodos = getVisibleTodos(visibilityFilter, tasks)

    return (
      <div className='todolist'>
        <h1 className='title margin-bottom--small'>TodoList App</h1>
        <InputBar />
        <ul>
          {visibleTodos.map(task => (
            <li key={task.id}>
              <Task taskId={task.id} />
            </li>
          ))}
        </ul>
        <FilterBar />
      </div>
    )
  }
}

function mapStateToProps({ visibilityFilter, todos }) {
  const todoIds = Object.keys(todos)

  const tasks = todoIds.map(id => todos[id])
    .sort((a, b) => b.createdDate - a.createdDate)

  return {
    visibilityFilter,
    tasks
  }
}

TodoList.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(TodoList)