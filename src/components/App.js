import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { handleReceiveTodos } from '../actions/todos'

import LoadingBar from 'react-redux-loading'
import TodoList from './TodoList'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveTodos())
  }

  render() {
    return (
      <Fragment>
        <div className="app flex">
          <TodoList />
        </div>
      </Fragment>
    )
  }
}

// function mapStateToProps({ todos }) {
//   return {
//     loading: Object.entries(todos).length === 0
//   }
// }

export default connect()(App)