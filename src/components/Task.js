import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleCheckTodo, handleUncheckTodo } from '../actions/todos'

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
    <div className='task' >
      <label className='checkmark-container'>
        <input
          type='checkbox'
          name='isCompleted'
          checked={props.task.completed}
          onChange={handleChange}
        />
        <span className='checkmark'></span>
        {props.task.text}
      </label>
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

export default connect(mapStateToProps)(Task)