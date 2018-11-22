import React from 'react'
import Drag from './Drag'
import { connect } from 'react-redux'
// import { initTree } from '../actions'

class App extends React.Component {
  render() {
    // this.props.dispatch(initTree())
    return (
      <Drag data={this.props.data} parent={null}></Drag>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.tree
})

export default connect(mapStateToProps)(App)