import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getOrderedVisibleTodos } from '../selectors/todos'

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
  return {
    tasks: getOrderedVisibleTodos(state)
  }
}

export default connect(mapStateToProps)(TodoList)