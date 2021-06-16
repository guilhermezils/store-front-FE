import React from 'react';
import './App/css';

class Shop extends Component{
    render(){
        return(
            <div>
             <h1> <ScoreContainer scores={this.state.scores} /></h1>
            </div>
        )
    }
}

export default Shop; 