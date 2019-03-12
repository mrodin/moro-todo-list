import React from 'react'
import { connect } from 'react-redux'

import { handleRemoveTodo } from '../actions/todos'
import { getTodos } from '../selectors/todos'

function StatusBar(props) {
  const { todosSize, todosCompleted, todosCompletedSize } = props

  const handleDeleteCompleted = e => {
    const { dispatch } = props

    todosCompleted.forEach(todo => {
      dispatch(handleRemoveTodo(todo.get('id')))
    })
  }

  return (
    <div className='status-bar flex'>
      <div>{`${todosCompletedSize} / ${todosSize} tasks completed`}</div>
      <div>
        {
          todosCompletedSize > 0 &&
          <button
            className='clear-button'
            onClick={handleDeleteCompleted}
          >
            Clear completed
          </button>
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const todos = getTodos(state)
  const todosSize = todos.size

  const todosCompleted = todos.filter(todo => todo.get('completed') === true)
  const todosCompletedSize = todosCompleted.size

  return {
    todosSize,
    todosCompleted,
    todosCompletedSize
  }
}

export default connect(mapStateToProps)(StatusBar)