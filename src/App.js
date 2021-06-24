
import React, { useEffect, useState } from 'react';
import "./App.css";
import Nav from "./components/Nav"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Cart from "./components/Cart"
// import Shop from "./Shop"
import ScoreContainer from "./components/ScoreContainer";
// import FeaturedScore from "./FeaturedScore";
// import LoginSignUp from "./LoginSignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginSignUp from "./components/LoginSignUp";
import Home from "./components/Home";
// import { useState } from 'react';

const scoreUrl = "http://localhost:3000/scores"


function App(props) {
  const [scores, setScores] = useState([])
  const [cart, setCart] = useState([])

  function onAddToCart(score){
    let add = [...cart, score]
    setCart(cart => add)
  }
  function onRemoveScore(id){
    let remove = cart.filter(item => item.id != id )
    setCart(cart => remove)
  }
  useEffect(()=> {
    fetch(scoreUrl)
     .then((res) => res.json())
    .then(scores => setScores(scores))
  },[])
  
  
  useEffect(()=> {
    fetch('http://localhost:3000/users/1')
     .then((res) => res.json())
    .then(cart => setCart(cart))
  },[])


  // console.log(scores)
  return (
    <div>
      
      <Router>
        
    
       <Nav />
     {/* <Cart /> */}
     
      <Route exact path="/Cart"> 
      <Cart cart={cart}
      onRemoveScore={onRemoveScore} />
      </Route>


       <Route exact path="/About" component={About} />
       <Route exact path="/" > 
       <Home />
        </Route>
       

       <Route exact path="/ContactUs" component={ContactUs} />

       <Route exact path="/Shop" >
       <ScoreContainer onAddToCart={onAddToCart} scores={scores}/>
        </Route>

       <Route exact path="/LoginSignUp" component={LoginSignUp } />
      {/* <ScoreContainer scores={this.state.scores} /> */}

       {/* <FeaturedScore scores={this.state.scores}/> */}

      

    
      
    </Router>
    </div>
  );
}

export default App;






// class App extends Component {
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   state = {
//     scores: []
//   };
//   componentDidMount(){
//     fetch(scoreUrl)
//       .then((res) => res.json())
//       .then((scores) => this.setState({ scores }));
//   }




//   render() {
//     return (
//       <Router>
//         <Switch >
//     <div>
//       <Nav />
//       <Cart />
     
//         <Route exact path="/About" component={About} />
//         <Route exact path="/" component={Home} />

//         <Route path="/ContactUs" component={ContactUs} />

//         <Route exact path="/Shop" 
//       component={()=><ScoreContainer scores={this.state.scores} />} />

//         <Route path="/LoginSignUp" component={LoginSignUp } />
//       {/* <ScoreContainer scores={this.state.scores} /> */}

//       {/* <FeaturedScore scores={this.state.scores}/> */}

      

//     </div>
//       </Switch>
//     </Router>
//     );
//   }
// }

// export default App;

// //router props video on min 50. https://www.youtube.com/watch?v=bMo9Fe5lF2o



// //to-do

// //featured score still not working, it will show the item in all
// //pages.