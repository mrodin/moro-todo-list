import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveTodos } from '../actions/todos'
import TodoList from './TodoList'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveTodos())
  }

  render() {
    return (
      <div className="app flex">
        <TodoList />
      </div>
    )
  }
}

export default connect()(App)