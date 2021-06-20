import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav"
import About from "./About"
import ContactUs from "./ContactUs"
import Shop from "./Shop"
import ScoreContainer from "./ScoreContainer";
import FeaturedScore from "./FeaturedScore";
// import LoginSignUp from "./LoginSignUp";
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
      <Router>
    <div>
      <Nav color="blue"/>
   
      {/* <Route path="/" component={App} /> */}
      <Route path="/About" component={About} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Shop" 
      component={()=><ScoreContainer scores={this.state.scores} />} />
      {/* <ScoreContainer scores={this.state.scores} /> */}

      < FeaturedScore scores={this.state.scores}/>

    </div>
    </Router>
    );
  }
}

export default App;


//removed filter


//to-do

// make a featured item, instead of Score container