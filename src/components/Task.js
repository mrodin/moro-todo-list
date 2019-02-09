import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { handleCheckTodo, handleUncheckTodo } from '../actions/todos'

class Task extends Component {
  state = {
    isCompleted: this.props.task.completed
  }

  handleChange = e => {
    const { dispatch } = this.props
    const { id } = this.props.task
    const { name, checked } = e.target

    this.setState({ [name]: checked })

    if (checked) {
      dispatch(handleCheckTodo(id))
    } else {
      dispatch(handleUncheckTodo(id))
    }
  }

  render() {
    return (
      <div className='task' >
        <label className='checkmark-container'>
          <input
            type='checkbox'
            name='isCompleted'
            checked={this.state.isCompleted}
            onChange={this.handleChange}
          />
          <span className='checkmark'></span>
          {this.props.task.text}
        </label>
      </div>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default connect()(Task)