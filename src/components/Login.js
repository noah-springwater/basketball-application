import React, { Component } from 'react';
import {connect} from 'react-redux';
import {googleLogin} from '../actions/userAction';

class Login extends Component {

  componentWillMount() {
    if (this.props.user !== null) {
      console.log(this.props.history);
      
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push('/');
    }
  }

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

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { googleLogin })(Login);