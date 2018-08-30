import React, { Component } from 'react';

const PlayerCard = (props) => (
  <div className="card-container">
    <div>{props.children}</div>
  </div>
);

export default PlayerCard;