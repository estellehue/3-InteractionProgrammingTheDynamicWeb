import React from 'react';
import { Route } from 'react-router-dom';
import dancing from '../pictures/dancingHeroes.gif';

const QuizStart = ({startQuiz}) => {
    return(
            <div className="Quiz Start">
                <button className="ui inverted button start"
                    onClick={startQuiz}
                > Start Quiz </button>

            <Route render={({history}) => (
                <button className="ui inverted button"
                onClick={() => {history.push('/') }}
                > Exit Quiz </button>
            )}/>
            <img src={dancing} alt=""/> 
            </div>
        );
};
export default QuizStart;
    