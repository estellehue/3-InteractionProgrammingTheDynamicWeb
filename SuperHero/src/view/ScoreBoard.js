import React from 'react';
import loading from '../pictures/superLoading.gif';

const ScoreBoard = (props) => {
    const {
        scoreboard
    } = props;

    //sort in desc order
    const scoreboardArr = [];
    scoreboard ? scoreboard.map((score) => scoreboardArr.push(score.score)): <h1 className="loading"><img src={loading} alt="Loading..."/></h1>;
    scoreboardArr.sort((a, b) => {return b-a});

    return (
        <center><h1>Score Board</h1>
        <div className="scoreList">    
        <center>
            {scoreboardArr.map((score, index) => <div key={index}  className="scores"><h2>{score}</h2> </div>)}
        </center>
        </div>
        </center>
    );
};

export default ScoreBoard;