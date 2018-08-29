import React, { Component } from 'react';
import './App.css';
import { database } from '../firebase';
import _ from 'lodash';


class App extends Component {

constructor(props) {
  super(props);
  //state
  this.state = {
    title: '',
    body: '',
    players: {}
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
  database.on('value', (snapshot) => {
    this.setState({
      players: snapshot.val()
    })
  })
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
    body: this.state.body
  }

  database.push(player);
  this.setState({
    title: '',
    body: '',
  })
  console.log('submit');
}

renderPlayers() {
  return _.map(this.state.players, (player, key) => {
    return (
      <div key="key">
        <p>{player.title}</p>
        <h2>{player.body}</h2>
      </div>
    )
  });
}

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
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

export default App;