import React, { Component } from "react";
import ScoreItem from "../components/ScoreItem";

class YourCart extends Component {
  

  render() {
    return (
      <div className="ui segment inverted olive score-army">
        <div className="ui five column grid">
          <div className="row score-army-row">
            {this.props.scores.map((score) => (           
            <ScoreItem
            key={score.id} 
            score={score} 
            handleClick={this.props.handleClick} 
            handleDelete={this.props.handleDelete} 
            />
            ))}
            My Cart
          </div>
        </div>
      </div>
    );
  }
}

export default YourCart;
