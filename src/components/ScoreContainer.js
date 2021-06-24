import { Component } from "react"
import ScoreTile from "./ScoreTile"

import React from 'react';

function ScoreContainer(props) {
    let renderScores = props.scores.map(score => <ScoreTile 
                    Key={score.id}
                    score={score}
                    onAddToCart={props.onAddToCart}
                     />)



    return (

        <div>
            {renderScores}
        </div>
    );
}

export default ScoreContainer;









// class ScoreContainer extends Component{
//     render(){
//         return(
//             <div>
//                 {this.props.scores.map(score => <ScoreTile 
//                 Key={score.id}
//                 score={score}
//                  />)
                
//                 }
                
//             </div>
//         )
//     }
// }

// export default ScoreContainer 