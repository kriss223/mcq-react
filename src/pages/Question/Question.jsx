import React from 'react'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { decode } from 'url-encode-decode'
import { Line } from "rc-progress"
import Rating from '../../components/Rating'
import ques from "../../data/questions.json"
import { increment, changeName } from '../../redux/reducer'

import './Question.scss'


const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Question = () => {
  const score = useSelector(state => state.score.score)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [questionIndex, setQuestionIndex] = useState(0)
  const [countmistake, setcountmistake] = useState(0)
  const [check, setCheck] = useState(0)
  const [show, setshow] = useState(false)
  const [repeat, setrepeat] = useState(true)
  const [options, setOptions] = useState([])
  const [bg_color, setbg_color] = useState()

  const msg = ["Sorry", "Correct"]
  const bg = ["red", "green"]

  useEffect(() => {
    if (ques.length) {
      const question = ques[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [questionIndex]);



  const handleClick = (e) => {
    const question = ques[questionIndex];
    if (repeat) {
      
      if (e.target.textContent === decode(question.correct_answer)) {
        dispatch(increment())
        setCheck(1);
      }
      else {
        setCheck(0)
        setcountmistake(countmistake + 1)
      }
      
      if (questionIndex + 1 < ques.length) {
        setshow(true)
      } else {
        setTimeout(() => {
          navigate("/score")
        }, 1000);
      }
      setbg_color(parseInt(e.target.id))
      setrepeat(false)
    }

  };

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1)
    setshow(false)
    setrepeat(true)
    setbg_color("")
  }

  dispatch(changeName("kunal"))
  return (
    <div className="question">

      <div className="question__container">
        
        <Line percent={ (questionIndex + 1)/ques.length * 100} trailWidth={2} strokeWidth={2}/>

        <div className="content">

          <h1 className="question__number">Question {questionIndex + 1} of { ques.length }</h1>
          <p className="question__type">
          { decode(ques[questionIndex].category) }
          </p>
          <div className="difficulty">
            <Rating diff={ques[questionIndex].difficulty} />
          </div>

          <h3 className="question__content--title">
            { decode(ques[questionIndex].question) }
          </h3>
          

          <div className="question__options">

            {options.map((data, id) => (
              <div id={id} onClick={handleClick} className="option" style={id === bg_color ? { backgroundColor: bg[check] } : { backgroundColor: "white"}} key={id}>
                {decode(data)}
              </div>
            
          ))}

          </div>

          {
            show && <div className="next__button">
              <h1>{ msg[check] }</h1>
            <button onClick={nextQuestion} className="btn">next Question</button>
          </div>
          }
          

        </div>
        
        <div className="question__score">
          <h4>Score: {Math.floor(score / 20 * 100) + '%'}</h4>
          <h4>maxScore: {Math.floor((20 - countmistake) / 20 * 100) + '%'}</h4>
        </div>

        <div className="bottom__progress">
        <Line style={{
          width: ((ques.length - countmistake )/ 20 * 100) + '%',
          minHeight: "20px",
          backgroundColor: 'yellow'
        }}
          percent={score? ((score + countmistake)/ ques.length * 100): 0}
          strokeLinecap="square"/>

        </div>
        

      </div>

    </div>
  )
}

export default Question