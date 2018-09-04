import React, {Component} from 'react';
import {connect} from 'react-redux';
// with withRouter you can get access to the history object's property
import {withRouter} from 'react-router-dom';
import {getUser} from '../actions/userAction';
import {getPlayers} from '../actions/playersAction';

class LoadingComponent extends Component {
  componentWillMount() {
    const {userLoading, playersLoading} = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }
    if (playersLoading === undefined) {
      this.props.getPlayers();
    }
  }

  componentWillReceiveProps(nextProps) {
    // wait for user to get authenticated and try to load players
    if (nextProps.playersLoading === -1 && nextProps.user !== null) {
      this.props.getPlayers();
    }
  }

  render() {
    const { userLoading, playersLoading, children } = this.props;
    if ((!userLoading && !playersLoading) || this.props.user === null) {
      return <div>{children}</div>;
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    playersLoading: state.loading.players,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { getUser, getPlayers })(LoadingComponent));