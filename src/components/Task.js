import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleCheckTodo, handleUncheckTodo } from '../actions/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Task(props) {
  const handleChange = e => {
    const { dispatch, taskId } = props
    const { checked } = e.target

    if (checked) {
      dispatch(handleCheckTodo(taskId))
    } else {
      dispatch(handleUncheckTodo(taskId))
    }
  }

  return (
    <div className='task-container flex'>
      <div className='task flex'>
        <div className='checkbox-container'>
          <input
            type='checkbox'
            name='isCompleted'
            checked={props.task.completed}
            onChange={handleChange}
          />
        </div>
        <label
          className='taskname'
          style={props.task.completed ? completedStyle : null}
        >{props.task.text}</label>
      </div>
      <div className='flex controls'>
        <FontAwesomeIcon className='faIcon' icon={faPen} />
        <FontAwesomeIcon className='faIcon' icon={faTrashAlt} />
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