import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav"
import AboutUs from "./AboutUs"
import ContactUS from "./ContactUs"
import Shop from "./Shop"
import ScoreContainer from "./ScoreContainer";
import FeaturedScore from "./FeaturedScore";
import LoginSignUp from "./LoginSignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      
      <ScoreContainer scores={this.state.scores} />
    </div>
   
    );
  }
}

export default App;


//removed filter


//to-do

// make a featured item, instead of Score container