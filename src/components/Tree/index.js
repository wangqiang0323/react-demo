import React from 'react'
import App from './components/App'
import './index.css'
import { initTree } from './actions'
import { connect } from 'react-redux'

class Tree extends React.Component {

  componentWillMount () {
    this.props.dispatch(initTree())
  }

  render() {
    return (
      <App className="tree-list"/>
    )
  }
}

export default connect()(Tree)