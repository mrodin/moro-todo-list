import React from 'react'
import { connect } from 'react-redux'
import { handleRemoveTodo } from '../actions/todos'

function StatusBar(props) {
  const { todosTotal, todosCompleted } = props

  const handleDeleteCompleted = e => {
    const { dispatch } = props

    todosCompleted.forEach(todo => {
      dispatch(handleRemoveTodo(todo))
    })
  }

  return (
    <div className='status-bar flex'>
      <div>{`${todosCompleted.length} / ${todosTotal} tasks completed`}</div>
      <div>
        {
          todosCompleted.length > 0 &&
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

function mapStateToProps({ todos }) {
  const todoKeys = Object.keys(todos)
  const todosTotal = todoKeys.length
  const todosCompleted = todoKeys.filter(id => {
    return todos[id].completed === true
  })

  return {
    todosTotal,
    todosCompleted
  }
}

export default connect(mapStateToProps)(StatusBar)