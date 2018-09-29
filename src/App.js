import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Menu from './menu/menu.js'
import {fakeAuth, AuthButton} from './PrivateRoute.js'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <a>
              <span className="App-site-name">Johnson</span>
            </a>
            <AuthButton />
            { fakeAuth.isAuthenticated ?
              <div className="App-login"
                onClick={() => {
                  fakeAuth.signout(() => history.push("/"));
                  this.setState({ redirectToReferrer: false });
                }}
              >
                Sign out
              </div> :
              <div className="App-login" onClick={this.login}>Sign in</div>
              }
          </header>
          <Menu></Menu>
        </div>
      </Router>
    );
  }
}

export default App;
