import { Component } from "react"
import ScoreDetails from "./ScoreDetails"

class ScoreTile extends Component{
    render(){
        return(
            <div>
                <h1>Score Tile</h1>
                <ScoreDetails />
            </div>
        )
    }
}

export default ScoreTile 