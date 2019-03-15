import React from 'react'
import { connect } from 'react-redux'

import { addingNewTodo, updateNewTodoText } from '../actions/todos'
import { getNewTodoText } from '../selectors/todos'

function InputForm(props) {
  const { dispatch } = props

  const handleChange = e => {
    const { value } = e.target

    dispatch(updateNewTodoText(value))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { newTodoText } = props

    if (newTodoText.trim().length > 0) {
      dispatch(addingNewTodo.start(newTodoText))
      dispatch(updateNewTodoText(''))
    }
  }

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='What needs to be done?'
        autoComplete='off'
        value={props.todoText}
        name='todoText'
        onChange={handleChange}
      />
    </form>
  )
}

function mapStateToProps(state) {
  return {
    newTodoText: getNewTodoText(state)
  }
}

export default connect(mapStateToProps)(InputForm)