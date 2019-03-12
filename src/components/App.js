import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { handleReceiveTodos } from '../actions/todos'

import TodoList from './TodoList'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveTodos())
  }

  render() {
    return (
      <Fragment>
        <div className='app flex'>
          {this.props.loading === true
            ? <p>Loading...</p>
            : <TodoList />
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.get('todos').isEmpty()
  }
}

export default connect(mapStateToProps)(App)