import React from 'react';
import loading from '../pictures/superLoading.gif';

const ScoreView = (props) => {
    const {
        scoreList
    } = props;

    //sort in desc order
    const scoreListArr = [];
    scoreList ? scoreList.map((score) => scoreListArr.push(score.score)): <h1 className="loading"><img src={loading} alt="Loading..."/></h1>;
    scoreListArr.sort((a, b) => {return b-a});
    
    return (
        <div>
            <center>
            <h1>Your scores:</h1>
            <div className="scoreList">
                <center>{scoreListArr.map((score, index) => <div key={index}  className="scores"><h2>{score}</h2></div>)}</center>
            </div></center>
        </div>
    );
};

export default ScoreView;