import React, { Component } from "react";
import Title from "../Title";
import GameMessage from "../GameMessage";
import ScoreBoard from "../ScoreBoard";
import "./Nav.css";

class Navbar extends Component {

    state = {
        score: 0,
        topscore:0,
        playing: false
    };

    updateScore = score => {

    };

    // 
    render() {
        return (
            <nav className="navbar">
                               
                        <h1><Title>Clicky Game</Title></h1>
                
                        <GameMessage 
                            message={this.props.message}>
                        </GameMessage>
                
                        <ScoreBoard 
                        score={this.props.score} 
                        topScore={this.props.topScore}> 
                        </ScoreBoard>
                            </nav>
        );
    };

}

export default Navbar;
