import React from 'react'

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

export default Task