import React from 'react'
import { connect } from 'react-redux'
import { handleCheckTodo, handleUncheckTodo } from '../actions/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import InputForm from './InputForm'

function InputBar(props) {

  // Checks all todos if at least one todo is incomplete,
  // if all todos are completed, unchecks all todos
  const handleSwitchAll = e => {
    const { dispatch, todos } = props

    const incompleteTodoIds = Object
      .keys(todos)
      .filter(id => {
        return todos[id].completed === false
      })

    if (incompleteTodoIds.length === 0) {
      Object.keys(todos).forEach(id => {
        dispatch(handleUncheckTodo(id))
      })
    } else {
      incompleteTodoIds.forEach(id => {
        dispatch(handleCheckTodo(id))
      })
    }
  }

  return (
    <div className='input-bar flex margin-bottom--small' >
      <button type='button' onClick={handleSwitchAll}>
        <FontAwesomeIcon className='input-bar__faAngleDown' icon={faAngleDown} />
      </button>
      <InputForm />
    </div>
  )
}

function mapStateToProps({ todos }) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(InputBar)