import React from 'react';
import {BuildQuiz} from '../js/QuizData';
import '../css/Quiz.css';

import QuizNav from './QuizNav.js';

import checkmark from '../pictures/checkmark.png';
import questionmark from '../pictures/questionmark.png';
import correctmark from '../pictures/correctmark.png';
import wrongmark from '../pictures/wrongmark.png';


class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            QuizData: BuildQuiz(this.props.item, this.props.wrongItem1, this.props.wrongItem2),
            question: null,
            userAnswer: null,
            currentQuestion: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true,
            start: true,
            selected: [0, 0, 0, 0, 0, 0]
        }
    }

    // Starts the component
    componentDidMount() {
        this.loadQuiz();
    }
    
    // Loads the quiz
    loadQuiz = () => {
        const {currentQuestion, QuizData} = this.state;
        this.setState(() => {
            return {
                number: QuizData[currentQuestion].id,
                question: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                correct: QuizData[currentQuestion].answer,
            }
        });
    }

    // Starts the quiz
    startQuiz = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion,
            start: false
        })
    }

    // Restarts the quiz, new quiz but same character
    reStartQuiz = () => {
        this.setState({
            QuizData: BuildQuiz(this.props.item, this.props.wrongItem1, this.props.wrongItem2),
            question: null,
            userAnswer: [],
            currentQuestion: 0,
            options: [],
            quizEnd: false,
            score: 0,
            start: false,
            selected: [0, 0, 0, 0, 0, 0]
        })
    }

    // Moves to next question
    nextQuestion = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }

    // Moves to previous question
    prevQuestion = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion - 1
        })
    }

    // Moves to desired question, but only goes to questions that have been answered
    // Questions start at 0 up to 7 = 8 questions, 
    // currentQuestion is the number that decides the question
    goToQuestion = (goToQ) => {
        if(goToQ === this.state.currentQuestion)
            return;
        if(this.state.selected[goToQ] !== 0){
            this.setState({
                currentQuestion: goToQ
        })}
    }

    // Pictures for QuizSide
    checkmarkAnswered = (ques) => {
        if(this.state.selected[ques] !== 0) 
            return <img src={checkmark} alt="checkmark"/>;
        else 
            return <img src={questionmark} alt="questionmark"/>;
    }

    // Pictures for QuizEnd
    markCorrect = (answ) => {
        const correct = this.state.QuizData.map((item, index) => {return item.answer});
        if(this.state.selected[answ] === correct[answ]) 
            return <img src={correctmark} alt="correctmark"/>;
        else 
            return <img src={wrongmark} alt="wrongmark"/>; 
    }

    // Updates the component
    componentDidUpdate(prevProp, prevState) {
        const {currentQuestion, QuizData} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.setState(() => {
                return {
                    number: QuizData[currentQuestion].id,
                    question: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    correct: QuizData[currentQuestion].answer,
                };
            })
        }
    }

    // Handles finished quiz
    finishQuiz = () => {
        if(this.state.currentQuestion === this.state.QuizData.length - 1){
            this.setState({
                quizEnd: true
            })
            this.finalScore();
        }
    }

    // Gives the final score of the quiz
    finalScore = () => {
        const correctAnswers = this.state.QuizData.map((item, index) => {return item.answer});
        this.setState({
            score: this.compareCorrectAnswers(this.state.selected, correctAnswers)
        })
    }

    // Calculate the score by comparing the array of chosen answers with the correct answers
    compareCorrectAnswers = (answers, corrects) => {
        if(answers.length !== corrects.length) {
            return false;
        }
        else { 
            let result = 0; 
            // comparing each element of array 
            for(let i=0; i<answers.length; i++) {
                if(answers[i] === corrects[i]) {
                    result += 1;
                }
            }
            return result;     
        } 
    }

    // Collect selected answer in index corresponding to question
    selectedAnswers = (index, answer) => {
        const newSelected = this.state.selected.map((element, i) => {
            if(i === index){
                return answer;
            }
            else {
                return element;
            }
        });
        // must have callback function to update state correctly, else setState is behind
        this.setState({
            selected: newSelected
        }, function(){return this.state.selected})
    }

    // If question is answered to be able to move to next
    disableNext = () => {
        if(this.state.selected[this.state.currentQuestion] !== 0)
            return false;
        else
            return true; 
    }


    render() {
        const {QuizData, question, options, currentQuestion, quizEnd, start, score, selected} = this.state;
            return(
                <QuizNav
                    quizEnd={quizEnd}
                    start={start}
                    startQuiz={this.startQuiz} 
                    score={score}
                    quizData={QuizData}
                    reStartQuiz={this.reStartQuiz}
                    markCorrect={this.markCorrect}
                    question={question}
                    currentQuestion={currentQuestion}
                    options={options}
                    selectedAnswers={this.selectedAnswers}
                    prev={this.prevQuestion}
                    next={this.nextQuestion}
                    finishQuiz={this.finishQuiz}
                    goToQuestion={this.goToQuestion}
                    checkmarkAnswered={this.checkmarkAnswered}
                    disableNext={this.disableNext}
                    selected={selected}
                />
            )
        }
    }
export default Quiz;
