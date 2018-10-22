import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { fakeAuth, AuthButton } from './route/PrivateRoute.js'
import createBrowserHistory from 'history/createBrowserHistory'
import Loadable from 'react-loadable';
import Loading from './components/Loading'
import RouteConfig from './route/routeConfig'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight)

const history = createBrowserHistory()

const LoadableMenu = Loadable({
  loader: () =>
    import('./components/Menu'),
  loading: Loading
})

class App extends Component {
  state = {
    redirectToReferrer: false,
    routeConfig: RouteConfig
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  };

  loginOut = () => {
    fakeAuth.signout(() => history.push("/"));
    this.setState({ redirectToReferrer: false });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavHeader login={this.login} loginOut={this.loginOut}></NavHeader>
          <LoadableMenu results={this.state.routeConfig}></LoadableMenu>
        </div>
      </Router>
    );
  }
}

const NavHeader = (props) => {
  return (
    <header className="App-header">
      <a>
        <span className="App-site-name">Johnson</span>
      </a>
      <AuthButton />
      { fakeAuth.isAuthenticated
        ? <div className="App-login" onClick={props.loginOut}>Sign out</div>
        : <div className="App-login" onClick={props.login}>Sign in</div>}
    </header>
  )
}

export default App;