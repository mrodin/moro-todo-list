import React from 'react'
import { connect } from 'react-redux'
import { handleRemoveTodo } from '../actions/todos'

function StatusBar(props) {
  const { todosSize, todosCompleted } = props

  const handleDeleteCompleted = e => {
    const { dispatch } = props

    todosCompleted.forEach(todo => {
      dispatch(handleRemoveTodo(todo.id))
    })
  }

  return (
    <div className='status-bar flex'>
      <div>{`${todosCompleted.size} / ${todosSize} tasks completed`}</div>
      <div>
        {
          todosCompleted.size > 0 &&
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
  const todos = state.get('todos')
  const todosSize = todos.size
  const todosCompleted = todos.filter(todo => todo.completed === true)

  return {
    todosSize,
    todosCompleted
  }
}

export default connect(mapStateToProps)(StatusBar)