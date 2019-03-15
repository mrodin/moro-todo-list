import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { loadingTodos } from '../actions/todos'

import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className='app flex'>
          {this.props.isFetching === true
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
    isFetching: state.get('isFetching')
  }
}

export default connect(mapStateToProps)(App)