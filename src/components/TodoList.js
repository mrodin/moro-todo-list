import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import InputBar from './InputBar'
import FilterBar from './FilterBar'
import StatusBar from './StatusBar';

class TodoList extends Component {
  render() {
    const { tasks } = this.props

    const taskList = tasks.map(task => (
        <li key={task}>
          <Task taskId={task} />
        </li>
      ))

    return (
      <div className='todolist'>
        <h1 className='title margin-bottom--small'>TodoList App</h1>
        <InputBar />
        <ul>
          {taskList}
        </ul>
        <FilterBar />
        <StatusBar />
      </div>
    )
  }
}

function mapStateToProps(state) {  
  const visibilityFilter = state.get('visibilityFilter')
  const storeTasks = state.get('todos')
  
  function getVisibleTodos(visibilityFilter, tasks) {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return tasks
      case 'SHOW_ACTIVE':
        return tasks.filter(todo => !todo.get('completed'))
      case 'SHOW_COMPLETED':
        return tasks.filter(todo => todo.get('completed'))
      default:
        return tasks
    }
  }

  const tasks = getVisibleTodos(visibilityFilter, storeTasks).keySeq()

  return {
    tasks
  }
}

export default connect(mapStateToProps)(TodoList)