import React from 'react';
// import { Component } from "react"
import ScoreDetails from "./ScoreDetails"



function ScoreTile(props) {
    function addToCart (){
        let newCartObj = {
            user_id: 1,
            score_id: props.score.id
        }
props.onAddToCart(props.score)
fetch("http://localhost:3000/carts", {
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(newCartObj)
    })
    .then(res=> res.json)
    .then(console.log)
}
  

    return (
        <div>
              <div className="img">
                 <img key={props.score.id} 
                alt={props.score.name} 
                src={props.score.cover}/>
            </div>  
                <p>{props.score.name}</p>
                <p>{ "$"+ props.score.price}</p>
                 <button onClick={addToCart}>add to cart</button>
                
        </div>
    );
}

export default ScoreTile;






// class ScoreTile extends Component{
//     render(){
//         return(
//             <div className="wrapper">
//             <div className="img">
//                 <img key={this.props.score.id} 
//                 alt={this.props.score.name} 
//                 src={this.props.score.cover}/>
//             </div>  
//                 <p>{this.props.score.name}</p>
                
//                 <ScoreDetails score={this.props.score}/>
//             </div>
//         )
//     }
// }

// export default ScoreTile 