
import React from 'react';
import QuizEnd from '../view/QuizEnd';
import QuizStart from '../view/QuizStart';
import QuizView from '../view/QuizView';
import QuizSide from '../view/QuizSide';
import YourScores from './yourScores';

const QuizNav = ({ quizEnd, start, startQuiz, score, quizData, reStartQuiz, markCorrect, question,
    currentQuestion, options, selectedAnswers, prev, next,
    finishQuiz, goToQuestion, checkmarkAnswered, disableNext, selected }) => {

    if (start) {
        return (
            <QuizStart
                startQuiz={startQuiz}
            />
        )
    }

    if (quizEnd) {
        return (
            <div className="QuizEnd">
                <YourScores
                    s={score}
                />
                <QuizEnd
                    score={score}
                    quiz={quizData}
                    reStart={reStartQuiz}
                    markCorrect={markCorrect}
                    show={show}
                />
            </div>
        )
    }

    if (!start) {
        return (
            <div className="QuizView">
                <QuizView
                    questions={question}
                    currentQuestion={currentQuestion}
                    quiz={quizData}
                    options={options}
                    selectedAnswers={selectedAnswers}
                    prev={prev}
                    next={next}
                    finish={finishQuiz}
                    disableNext={disableNext}
                    selected={selected}
                />
                <QuizSide
                    goToQuestion={goToQuestion}
                    quiz={quizData}
                    check={checkmarkAnswered}
                />
            </div>
        )
    }
}
export default QuizNav;

// Called to display the default hidden correct answers
function show() {
    for (var i = -1; i < 6; i++) {
        var x = document.getElementById(i);
        x.style.display = "block";
    }
    document.getElementById('answBut').disabled = true;
    return;
}
