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

    const incompleteTodos = todos.filter(todo => todo.completed === false)

    if (incompleteTodos.size === 0) {
      todos.forEach(todo => dispatch(handleUncheckTodo(todo.id)))
    } else {
      incompleteTodos.forEach(todo => dispatch(handleCheckTodo(todo.id)))
    }
  }

  return (
    <div className='input-bar flex margin-bottom--small' >
      <button type='button' onClick={handleSwitchAll}>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <InputForm />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  }
}

export default connect(mapStateToProps)(InputBar)