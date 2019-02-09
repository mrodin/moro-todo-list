import React from 'react'
import PropTypes from 'prop-types'

function Task(props) {
  return (
    <div className='task'>
      <label className='checkmark-container'>
        <input type='checkbox' checked='checked' />
        <span className='checkmark'></span>
        {props.task.text}
      </label>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task