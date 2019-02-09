import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Task from './Task'
import Input from './Input';
import Controls from './Controls';

class TodoList extends Component {
  render() {
    return (
      <div className='todolist'>
        <h1 className='todolist__title margin-bottom--small'>TodoList App</h1>
        <Input />
        <ul>
          {this.props.tasks.map(task => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
        <Controls />
      </div>
    )
  }
}

function mapStateToProps({ todos }) {
  const todoIds = Object.keys(todos)

  const tasks = todoIds.map(id => todos[id])
    .sort((a, b) => b.createdDate - a.createdDate)

  return {
    tasks
  }
}

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(TodoList)