import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import { fakeAuth, AuthButton, PrivateRoute } from '../../PrivateRoute.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { initRoute, loadUser, loadStarred, updateLogin } from '../../actions'
import PropTypes from 'prop-types'

library.add(faAngleLeft, faAngleRight)


const loadData = ({ login, loadUser, loadStarred }) => {
  loadUser(login, [ 'name' ])
  // loadStarred(login)
}

class App extends Component {
  static propTypes = {
    config: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        isPrivate: PropTypes.bool,
        strict: PropTypes.bool,
        component: PropTypes.func.isRequired
      }),
    ).isRequired,
  };

  componentWillMount () {
    this.props.initRoute()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavHeader {...this.props}></NavHeader>
          <AppMenu data={this.props.config}></AppMenu>
          <AppBody data={this.props.config}></AppBody>
        </div>
      </Router>
    );
  }
}

class NavHeader extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  };

  loginOut = () => {
    fakeAuth.signout(() => this.props.history.push("/"));
    this.setState({ redirectToReferrer: false });
  }

  onKeyUp (e) {
    if (e.keyCode === 13 ) {
      loadData(Object.assign({}, {...this.props}, {login: e.target.value}))
      this.props.updateLogin(e.target.value)
    }
  }

  render () {
    return (
      <header className="App-header">
        <a>
          <span className="App-site-name">Johnson</span>
        </a>
        <AuthButton />
        <span className="search">
          <input placeholder="search" onKeyUp={this.onKeyUp.bind(this)}></input>
        </span>
        { fakeAuth.isAuthenticated
          ? <div className="App-login" onClick={this.loginOut}>Sign out</div>
          : <div className="App-login" onClick={this.login}>Sign in</div>}
      </header>
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

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = 'wangqiang0323'

  const {
    pagination: { starredByUser },
    entities: { users, repos }
  } = state
  const starredPagination = starredByUser[login] || { ids: [] }
  const starredRepos = starredPagination.ids.map(id => repos[id])
  const starredRepoOwners = starredRepos.map(repo => users[repo.owner])

  return {
    login,
    starredRepos,
    starredRepoOwners,
    starredPagination,
    user: users[login],
    config: state.routeConfig
  }
}

export default withRouter(connect(mapStateToProps, {
  initRoute,
  loadUser,
  loadStarred,
  updateLogin
})(App))
