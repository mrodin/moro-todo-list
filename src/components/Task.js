import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  handleCheckTodo,
  handleUncheckTodo,
  handleRemoveTodo
} from '../actions/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Task(props) {
  const handleCheckboxChange = e => {
    const { dispatch, taskId } = props
    const { checked } = e.target

    if (checked) {
      dispatch(handleCheckTodo(taskId))
    } else {
      dispatch(handleUncheckTodo(taskId))
    }
  }

  const handleRemove = e => {
    const { dispatch, taskId } = props

    dispatch(handleRemoveTodo(taskId))
  }

  return (
    <div className='task-container flex'>
      <div className='task flex'>
        <div className='checkbox-container'>
          <input
            type='checkbox'
            name='isCompleted'
            checked={props.task.completed}
            onChange={handleCheckboxChange}
          />
        </div>
        <label
          className='taskname'
          style={props.task.completed ? completedStyle : null}
        >{props.task.text}</label>
      </div>
      <div className='flex controls'>
        <button type='button'>
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

function mapStateToProps({ todos }, { taskId }) {
  return {
    task: todos[taskId]
  }
}

Task.propTypes = {
  taskId: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired
}

const completedStyle = {
  fontStyle: "italic",
  color: "#696969",
  textDecoration: "line-through"
}

export default connect(mapStateToProps)(Task)