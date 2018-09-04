import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getPlayers, savePlayer, deletePlayer} from '../actions/playersAction';
import PlayerCard from './PlayerCard';
import { getUser } from '../actions/userAction';


class App extends Component {

constructor(props) {
  super(props);
  //state
  this.state = {
    title: '',
    body: '',
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.renderPlayers = this.renderPlayers.bind(this);
}

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value,
  })
}

handleSubmit(e) {
  e.preventDefault();
  const player = {
    title: this.state.title,
    body: this.state.body,
    uid: this.props.user.uid
  }
  this.props.savePlayer(player);
  this.setState({
    title: '',
    body: '',
  })
}

renderPlayers() {
  return _.map(this.props.players, (player, key) => {
    return (
      <PlayerCard key={key}>
        <Link to={`/${key}`}>
          <p>{player.title}</p>
        </Link>
        <h2>{player.body}</h2>
        {player.uid === this.props.user.uid && (
          <button className="delete-button" onClick={()=>this.props.deletePlayer(key)}>
            Delete
          </button>)}
      </PlayerCard>
    );
  });
}

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.title}
              type="text"
              name="title"
              className="input"
              placeholder="Title..."
              required
            />
          </div>
          <div>
            <textarea
              onChange={this.handleChange}
              value={this.state.body}
              type="text"
              name="body"
              className="text-area"
              placeholder="Body..."
              required
            />
          </div>
          <div className="button-container">
            <button className="button-here">
              Save
            </button>
          </div>
        </form>
        {this.renderPlayers()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    players: state.players,
    user: state.user
  }
}

export default connect(mapStateToProps, { getPlayers, savePlayer, deletePlayer, getUser })(App);