import React from 'react'
import TreeList from './TreeList'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <TreeList data={this.props.data} parent={0}></TreeList>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.tree
})

export default connect(mapStateToProps)(App)