import { Component } from "react"
import ScoreTile from "./ScoreTile"

class ScoreContainer extends Component{
    render(){
        return(
            <div>
                {this.props.scores.map(score => <ScoreTile 
                Key={score.id}
                score={score} />)}
                
            </div>
        )
    }
}

export default ScoreContainer 