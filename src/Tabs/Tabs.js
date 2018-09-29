import React from 'react';
import './Tabs.css'

class Tab extends React.Component{
  render() {
    return (
      <li
        className={ this.props.isActive ? 'navigation--active': '' }
        onClick={ this.props.onActiveTab }
      >
        <p>{ this.props.content }</p>
      </li>
    )
  }
}

class Tabs extends React.Component{
  state = {
    selectedTabId: 1
  }

  isActive (id) {
    return this.state.selectedTabId === id;
  }

  setActiveTab (selectedTabId) {
    this.setState({ selectedTabId });
  }

  render() {
    var total = this.props.data.points.total,
    	tabs = total.map(function (el, i) {
          return <Tab
            key={ i }
            content={ el.name }
            isActive={ this.isActive(el.id) }
            onActiveTab={ this.setActiveTab.bind(this, el.id) }
          />
        }, this);

    return (
      <ul className="navigation">
       { tabs }
      </ul>
    )
  }
}



export default Tabs
