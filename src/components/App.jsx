import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dashboard from './dashboard'
import * as actionCreators from '../stores/login/actions'

require('../styles/style.css')

class App extends Component {
  constructor(props){
    super(props)
    props.actions.login()
  }

  render() {
    return (
      <div className='container'>
          { this.props.children || <Dashboard /> }
      </div>
    );
  }
}

module.exports = connect(
  state => ({ auth: state.auth }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App)
