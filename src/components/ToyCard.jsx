import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={''} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn" onClick={() => this.props.handleLike(this.props.id, this.props.likes)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.props.handleDonate(this.props.id, this.props.index)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
