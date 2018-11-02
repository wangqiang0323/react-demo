import React from 'react'
import './index.css'

class Panel extends React.Component {
  state = {
    hide: true
  }

  collapse() {
    this.setState({hide: !this.state.hide})
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-heading" onClick={this.collapse.bind(this)}>{this.props.title}</div>
        <div className={this.state.hide ? 'hide' : 'panel-body'}>{this.props.children}</div>
        <div className={this.state.hide ? 'hide' : 'panel-footer'}>{this.props.footer}</div>
      </div>
    )
  }
}

export default Panel