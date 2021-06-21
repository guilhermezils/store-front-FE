import React, { Component } from 'react';
import FeaturedScore from "./FeaturedScore";



class Home extends Component{
    render(){

    return (
        <div>
        <p>hihihihi</p>
            <FeaturedScore scores={this.state.scores} />
        </div>
    )}
}

export default Home;