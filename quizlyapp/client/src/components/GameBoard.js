import React, { Component } from 'react'

//custom api helper
import { getDifficultTrivia, getAllTrivia, getTriviaByCategory, addNewScore } from '../services/api_helper';

import { Link } from 'react-router-dom'

//custom components
import Question from './Question';
import ScoreList from './ScoreList'

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      optionArray: [],
      category: '',
      questionArray: [],
      questionCounter: 0,
      currentQuestion: null,
      scoreTotal: 0,
      message: '',
      questionsLoaded: false,
      showNextQuestionButton: false,
      gameOver: false,
      showScores: false,
      questionsCorrect: 0,
      scoreMessage: 'Score',
      showStats: false
    }
  }

  getAllQuestions = async () => {
    const questionArray = await getAllTrivia(); //passed through props from apihelper impoted in App.js

    this.setState({
      questionArray,
      questionsLoaded: true
    })
  }

  getAllCategoryQuestions = async (category) => {
    const questionArray = await getTriviaByCategory(category); //passed through props from apihelper impoted in App.js

    this.setState({
      questionArray,
      category,
      questionsLoaded: true
    })
  }

  getAllDifficultTrivia = async () => {
    const questionArray = await getDifficultTrivia();

    this.setState({
      questionArray,
      questionsLoaded: true
    })
  }

  getRandomQuestion = () => {
    if (this.state.questionArray.length > 0 && this.state.questionCounter < 9) {
      let randomIndex = Math.floor(Math.random() * this.state.questionArray.length);
      let tempQuestionArray = this.state.questionArray.slice(0);
      let currentQuestion = tempQuestionArray.splice(randomIndex, 1); //I beleive splice mutates the array so it must be performed on a temp array and resaved into sate after.
      this.jumbleCurrentAnswers(currentQuestion[0]); //put answer and alternate option answers in array and shuffle it before passing to <Question />

      this.setState({
        currentQuestion: currentQuestion[0],
        questionArray: tempQuestionArray
      })
    } else {
      this.setState({
        gameOver: true,
        showNextQuestionButton: false,
        scoreMessage: 'Final Score'
      })
    }
  }

  jumbleCurrentAnswers = (cq) => {
    let tempOptionArray = [];
    tempOptionArray.push(cq.answer, cq.option1, cq.option2, cq.option3);
    let optionArray = []; //I know this is getting a tad convoluted.. this is the only way I thought of that we could do this, or use the shuffle array function from unit 1 which would also work.
    while (tempOptionArray.length > 0) {
      let randomIndex = Math.floor(Math.random() * tempOptionArray.length); //using this again :)
      let tempAnswer = tempOptionArray.splice(randomIndex, 1) // removes 1 element from the array reducing tempOptionArray.length by 1, eventually ending the loop.
      optionArray.push(tempAnswer);
    }

    this.setState({
      optionArray //now optionArray is filled randomly with the 3 options and 1 answer we won't really know the order but won't need to, answer still tied to object & in state.
    })
  }

  optionSelected = (e, playerChosenOption) => { //so the player has chosen their answer, were they right? call this on every answer choice made
    if (playerChosenOption[0] === this.state.currentQuestion.answer) {
      this.setState({
        scoreTotal: this.state.scoreTotal + this.state.currentQuestion.value,
        questionsCorrect: this.state.questionsCorrect + 1,
        message: `You got the answer right! ${this.state.currentQuestion.value} points added to your score.`,
        questionCounter: this.state.questionCounter + 1,
        showNextQuestionButton: true
      })
    } else {
      this.setState({
        message: `Sorry, that was incorrect.`,
        questionCounter: this.state.questionCounter + 1,
        showNextQuestionButton: true
      })
    }
    this.getRandomQuestion(); // despite the outcome, get the next question ready to go.
  }

  showNext = () => {
    this.setState({
      showNextQuestionButton: false
    })
  }

  showScores = () => {
    this.setState({
      showScores: true

    })
  }
  handleStats = () => {
    this.setState({
      showStats: !this.state.showStats
    })
  }



  submitPlayerScore = async (score) => {
    await addNewScore({ username: this.props.username, score: this.state.scoreTotal });
  }

  componentDidMount = async () => { //if category is passed as a prop get only those questions, otherwise get all questions.
    this.props.category === 'All Categories' ?
      await this.getAllQuestions() :
      this.props.category === 'Only Difficult Questions' ?
        await this.getAllDifficultTrivia() :
        await this.getAllCategoryQuestions(this.props.category)
  }

  render() {
    return (
      <div className="gameboard">
        {this.state.showStats && <div className="game-stats" >
          <div className="gameboard-score">
            {this.state.scoreMessage} {this.state.scoreTotal}
          </div>
          <div className="question-counter">
            Question {this.state.questionCounter} / 10
          </div>
        </div>}

        {//if questions are not loaded and game isnt over, show play button, otherwise show the question/answer options
          !this.state.currentQuestion && !this.state.gameOver ?
            <div className="play-button-wrapper">
              <button className="play-button" onClick={() => {
                this.getRandomQuestion()
                this.handleStats()
              }}>PRESS ME TO PLAY!</button>
            </div>
            :
            !this.state.showNextQuestionButton && !this.state.gameOver &&
            <div>

              <Question
                question={this.state.currentQuestion}
                optionArray={this.state.optionArray}
                optionSelected={this.optionSelected}
                questionCounter={this.state.questionCounter}
              />
            </div>
        }
        {
          this.state.showNextQuestionButton &&
          <div className="next-question">
            <div className="message"> {this.state.message}</div>
            <button onClick={this.showNext}>NEXT QUESTION</button>

          </div>
        }
        {
          this.state.gameOver && !this.state.showScores &&

          <div className="gameboard-final">
            <div className="message">{this.state.questionsCorrect} / {this.state.questionCounter} Questions correctly answered!</div>
            <button className="score-button" onClick={async () => {
              await this.submitPlayerScore(this.state.scoreTotal);
              this.showScores();
              this.handleStats();
            }}>See High Scores!</button>
          </div>
        }
        {
          this.state.showScores &&
          <div>
            <ScoreList />
            {this.props.username === "Guest" ?
              <Link to='/guest-landing'>
                <button className="play-again-button">Play another!</button>
              </Link>
              :
              <Link to='/login'>
                <button className="play-again-button">Play another!</button>
              </Link>
            }
          </div>
        }


      </div>
    )
  }
}

export default GameBoard