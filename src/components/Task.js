import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  handleRemoveTodo,
  handleRenameTodo
} from '../actions/todos'

import { switchingTodo } from '../actions/todos'

import { getTodoById } from '../selectors/todos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Task(props) {
  const { dispatch } = props

  const handleCheckboxChange = e => {
    const { taskId } = props
    const { checked } = e.target

    if (checked) {
      dispatch(switchingTodo.start(taskId, 'complete'))
    } else {
      dispatch(switchingTodo.start(taskId, 'incomplete'))
    }
  }

  const handleRemove = e => {
    const { dispatch, taskId } = props

    dispatch(handleRemoveTodo(taskId))
  }

  const handleRename = e => {
    const { dispatch, taskId } = props
    const originalText = props.task.get('text')
    const newText = prompt('Please enter name', originalText)

    if (!!newText) {
      dispatch(handleRenameTodo(taskId, newText))
    }
  }

  return (
    <div className='task-container flex'>
      <div className='task flex'>
        <div className='checkbox-container flex'>
          <input
            type='checkbox'
            name='isCompleted'
            checked={props.task.get('completed')}
            onChange={handleCheckboxChange}
          />
        </div>
        <label
          className='taskname'
          style={props.task.get('completed') ? completedStyle : null}
        >{props.task.get('text')}</label>
      </div>
      <div className='flex controls'>
        <button type='button' onClick={handleRename}>
          <FontAwesomeIcon className='faIcon' icon={faPen} />
        </button>
        <button type='button' onClick={handleRemove}>
          <FontAwesomeIcon
            className='faIcon' icon={faTrashAlt} />
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state, { taskId }) {
  return {
    task: getTodoById(state, taskId)
  }
}

Task.propTypes = {
  taskId: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired
}

const completedStyle = {
  fontStyle: 'italic',
  color: '#696969',
  textDecoration: 'line-through'
}

export default connect(mapStateToProps)(Task)