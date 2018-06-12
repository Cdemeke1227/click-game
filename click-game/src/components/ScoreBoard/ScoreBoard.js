import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => <p className="scoreBoard"> Score: {props.score} | Top Score: {props.topScore}</p>;

export default ScoreBoard;