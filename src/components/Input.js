import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAddTodo } from '../actions/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

class Input extends Component {
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
    const { dispatch } = this.props;

    if (todoText.trim().length > 0) {
      dispatch(handleAddTodo(todoText))
    }

    this.setState(() => ({
      todoText: ''
    }))
  }

  render() {
    return (
      <div className='input__container flex margin-bottom--small' >
        <FontAwesomeIcon className='input__faAngleDown' icon={faAngleDown} />
        <form className='input__form' onSubmit={this.handleSubmit}>
          <input
            className='input__input'
            type='text'
            placeholder='What needs to be done?'
            autoComplete='off'
            value={this.state.todoText}
            name='todoText'
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default connect()(Input)