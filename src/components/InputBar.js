import React from 'react'
import { connect } from 'react-redux'

import { switchingTodo } from '../actions/todos'
import { getTodos } from '../selectors/todos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import InputForm from './InputForm'

function InputBar(props) {

  // Checks all todos if at least one todo is incomplete,
  // if all todos are completed, unchecks all todos
  const handleSwitchAll = e => {
    const { dispatch, todos } = props

    const incompleteTodos = todos.filter(todo => todo.get('completed') === false)

    if (incompleteTodos.size === 0) {
      todos.forEach(todo => dispatch(switchingTodo.start(todo.get('id'), 'incomplete')))
    } else {
      incompleteTodos.forEach(todo => dispatch(switchingTodo.start(todo.get('id'), 'complete')))
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
    todos: getTodos(state)
  }
}

export default connect(mapStateToProps)(InputBar)