import { Component } from "react"

class ScoreDetails extends Component{
    render(){
        return(
            <div>
                <p>{ "$"+this.props.score.price}</p>
            </div>
        )
    }
}

export default ScoreDetails 