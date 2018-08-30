import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="nav-header">
          <Link className="navbar-home" to="/">Home</Link>
        </div>

        <div className="navbar-collapse" id="myNavbar">
          {
            this.props.user === null ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/logout" onClick={() => this.props.logout()}>Logout</Link>
            )
          }
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser, logout})(Header);