import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { PrivateRoute } from './../../route/PrivateRoute.js'

class Menu extends React.Component {
  render() {
    return (
      <Router>
      <div className="App-content">
        <AppMenu data={this.props.results}></AppMenu>
        <AppBody data={this.props.results}></AppBody>
      </div>
      </Router>
    )
  }
}

class AppMenu extends React.Component {
  render() {
    return (
      <div className="App-menu">
        <ul>
          {this.props.data.map((result) => {
            return <MenuListItemWrapper result={result} key={result.url}/>
          })}
        </ul>
      </div>
    )
  }
}

class MenuListItemWrapper extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.result.isOnlyLink ?
          '' : <li>
            <NavLink to={"/" + this.props.result.url}>{this.props.result.label}</NavLink>
          </li>
        }
      </div>
    )
  }
}

class AppBody extends React.Component {
  render() {
    return (
      <div className="App-body">
        {this.props.data.map((result) => {
          return <BodyListItemWrapper data={result} key={result.url}/>
        })}
      </div>
    )
  }
}

class BodyListItemWrapper extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div>
        {
          data.isPrivate
          ? <PrivateRoute strict path = { "/" + (data.link || data.url) } component = { data.component } />
          : <Route path={ "/" + (data.link || data.url) } component={data.component} />
        }
      </div>
    )
  }
}

export default Menu;