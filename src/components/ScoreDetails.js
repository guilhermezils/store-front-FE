import { Component } from "react"

class ScoreDetails extends Component{
    render(){
        return(
            <div>
                <p>{ "$"+this.props.score.price}</p>
                <button>add to cart</button>
                <br/>
                <br/>
            </div>
        )
    }
}

export default ScoreDetails 