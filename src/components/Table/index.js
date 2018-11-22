import React from 'react'
import App from './components/App'
import './index.css'
import { initTable } from './actions'
import { connect } from 'react-redux'

class Table  extends React.Component {
  componentWillMount () {
    this.props.dispatch(initTable())
  }

  render() {
    return (
      <App></App>
    )
  }
}

export default connect()(Table)