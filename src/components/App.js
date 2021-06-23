import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav"
import About from "./About"
import ContactUs from "./ContactUs"
import Cart from "./Cart"
// import Shop from "./Shop"
import ScoreContainer from "./ScoreContainer";
// import FeaturedScore from "./FeaturedScore";
// import LoginSignUp from "./LoginSignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSignUp from "./LoginSignUp";
import Home from "./Home";
import { useState } from 'react';

const scoreUrl = "http://localhost:3000/scores"


class App extends Component {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        <Switch >
    <div>
      <Nav />
      <Cart />
     
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={Home} />

        <Route path="/ContactUs" component={ContactUs} />

        <Route exact path="/Shop" 
      component={()=><ScoreContainer scores={this.state.scores} />} />

        <Route path="/LoginSignUp" component={LoginSignUp } />
      {/* <ScoreContainer scores={this.state.scores} /> */}

      {/* <FeaturedScore scores={this.state.scores}/> */}

      

    </div>
      </Switch>
    </Router>
    );
  }
}

export default App;

//router props video on min 50. https://www.youtube.com/watch?v=bMo9Fe5lF2o



//to-do

//featured score still not working, it will show the item in all
//pages.