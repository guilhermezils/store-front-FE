import { Component } from "react"
import ScoreTile from "./ScoreTile"

class ScoreContainer extends Component{
    render(){
        return(
            <div>
                <h1>ScoreContainer</h1>
                <ScoreTile />
            </div>
        )
    }
}

export default ScoreContainer 