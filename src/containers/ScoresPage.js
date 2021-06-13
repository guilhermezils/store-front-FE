import React, { Component } from "react";
import ScoreCollection from '../containers/ScoreCollection'
import YourCart from '../containers/YourCart'
const scoreUrl = 'http://localhost:3000/scores'

class ScoresPage extends Component {
  state = {
    scores: [],
  };

  componentDidMount() {
    fetch(scoreUrl)
      .then((res) => res.json())
      .then((scores) => this.setState({ scores }));
  }
  myCart = (score) => {
    const newScore = { ...score, enlisted: true };
    this.setState({ scores: this.state.scores.map((s) => (s === score ? newScore : s)) });
  };
  removeScore = (score) => {
    const newScore = { ...score, enlisted: false };
    this.setState({ scores: this.state.scores.map((s) => (s === score ? newScore : s)) });
  }
  deleteScore = (score) => {
    fetch(`http://localhost:3000/scores/${score.id}`, {
      method: 'DELETE',
    })
    .then(() =>
    this.setState({
      scores: [...this.state.scores.filter((s) => s !== score)],
    })
    );
  };
  render() {
    return (
      <div>
        <YourCart 
        handleClick={this.removeScore} 
        handleDelete={this.deleteScore} 
        scores={this.state.scores.filter((score) => score.enlisted)} />
        <ScoreCollection 
        handleClick={this.myCart} 
        handleDelete={this.deleteScore} 
        scores={this.state.scores} />
      </div>
    );
  }
}
export default ScoresPage;