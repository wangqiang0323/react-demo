import React from 'react';
import { fakeAuth } from '../../PrivateRoute.js'
import {
  Redirect
} from "react-router-dom";

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="page-content">
        {/* <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button> */}
      </div>
    );
  }
}

export default Login