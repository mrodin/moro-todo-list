import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveTodos } from '../actions/todos'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveTodos())
  }

  render() {
    return (
      <div className="App">
        Starter React App
      </div>
    );
  }
}

export default connect()(App)