import { Component } from "react"
import ScoreDetails from "./ScoreDetails"

class ScoreTile extends Component{
    render(){
        return(
            <div className="wrapper">
            <div className="img">
                <img key={this.props.score.id} 
                alt={this.props.score.name} 
                src={this.props.score.cover}/>
            </div>  
                <p>{this.props.score.name}</p>
                
                <ScoreDetails score={this.props.score}/>
            </div>
        )
    }
}

export default ScoreTile 