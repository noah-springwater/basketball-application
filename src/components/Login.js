import React, { Component } from 'react';
import {connect} from 'react-redux';
import {googleLogin} from '../actions/userAction';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <button onClick={this.props.googleLogin}>Login with Google</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { googleLogin })(Login);