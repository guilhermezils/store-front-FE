import { Component } from "react"
import ScoreTile from "./ScoreTile"

class FeaturedScore extends Component{
    render(){
        return(
            <div>
                {this.props.scores.slice(29).map(score => <ScoreTile 
                Key={score.id}
                score={score}
                 />)
                
                }
                
            </div>
        )
    }
}

export default FeaturedScore 

//// how to do it https://stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react