import React from 'react';
import './index.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Tab extends React.Component {
  render() {
    return (
      <li
        className={ this.props.isActive ? 'navigation--active': '' }
        onClick={ this.props.onActiveTab }
      >
        <p>{ this.props.content } - {this.props.children}</p>
      </li>
    )
  }
}

class Tabs extends React.Component {
  state = {
    selectedTabId: 1
  }

  isActive(id) {
    return this.state.selectedTabId === id;
  }

  setActiveTab(selectedTabId) {
    this.setState({ selectedTabId });
  }

  render() {
    var total = this.props.data,
      tabs = total.map(function(el, i) {
        return <Tab
            key={ i }
            content={ el.name }
            isActive={ this.isActive(el.id) }
            onActiveTab={ this.setActiveTab.bind(this, el.id) }>
            Tab
          </Tab >
      }, this);

    return (
      <div>
      <ReactCSSTransitionGroup component="ul" className="navigation" transitionName="tab" transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
       { tabs }
      </ReactCSSTransitionGroup>
      </div>
    )
  }
}



export default Tabs