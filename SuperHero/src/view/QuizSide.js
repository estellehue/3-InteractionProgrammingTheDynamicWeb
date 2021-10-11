import React from 'react';

const QuizSide = ({goToQuestion, quiz, check}) => {

    return(
        <div className="Quiz Side">
            <h3 className="sideHead"> Questions: </h3>
            <ul>
                {quiz.map((item, index) => (
                    <li className="check" key={index}>
                        <a className="sideList" href="#QuizView" onClick={() => goToQuestion(index)}>Question {index+1}   </a>
                        {check(index)}
                    </li>
                ))}
            </ul>
        </div>
    )};
export default QuizSide;

