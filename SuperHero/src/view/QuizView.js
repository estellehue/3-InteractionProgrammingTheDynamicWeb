import React from 'react';

const QuizView = ({questions, currentQuestion, quiz, options, selectedAnswers, prev, next, finish, disableNext, selected}) => {

    return(
        <div className="Quiz View">
            <h2 className="questions">{questions}</h2>
            <span className="qqcounter"> Question {currentQuestion + 1} out of {quiz.length}</span>
            {options.map(option => (
                <p key={Math.random()} 
                className= {`ui floating message options ${selected[currentQuestion] === option ? "selected" : null}`}
                onClick={() => {
                    selectedAnswers(currentQuestion, option);
                    }}>
                        {option}
                </p>
            ))}

            <div className="PrevNext">
            {currentQuestion > 0 &&
                <button className="ui inverted button"
                    onClick={prev}
                > Previous </button>}
            {currentQuestion < quiz.length - 1 &&
                <button className="ui inverted button"
                    disabled={disableNext()} 
                    onClick={next}
                > Next </button>}
            </div>
            {currentQuestion === quiz.length - 1 && 
                <button className="finishBut" 
                    disabled={disableNext()}
                    onClick={finish}
                > Finish </button>}
        </div>
    )};
export default QuizView;
