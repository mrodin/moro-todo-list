import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

class InputForm extends Component {
  state = {
    todoText: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { todoText } = this.state
    const { dispatch } = this.props

    if (todoText.trim().length > 0) {
      dispatch(addTodo(todoText))
    }

    this.setState(() => ({
      todoText: ''
    }))
  }

  render() {
    return (
      <form className='input-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='What needs to be done?'
          autoComplete='off'
          value={this.state.todoText}
          name='todoText'
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default connect()(InputForm)