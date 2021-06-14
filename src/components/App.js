import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav"
import Filter from "./Filter";
import ScoreContainer from "./ScoreContainer";
const scoreUrl = "http://localhost:3000/scores"

class App extends Component {
  state = {
    scores: []
  };
  componentDidMount(){
    fetch(scoreUrl)
      .then((res) => res.json())
      .then((scores) => this.setState({ scores }));
  }




  render() {
    return (
    <div className="App">
      <Nav />
      <Filter />
      <ScoreContainer scores={this.state.scores} />
    </div>
   
    );
  }
}

export default App;
