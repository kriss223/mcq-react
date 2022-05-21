import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Line } from "rc-progress"

import "./Score.scss";

const Score = () => {
  const navigate = useNavigate();
  const score = useSelector(state => state.score.score);
  const name = useSelector(state => state.score.userName);


  const changePage = () => {
    navigate('/question')
  }
  return (
    <div className="score center">

      <div className="score__container center">
        <h1>{name} score is: {score}</h1>
        <Line
          percent={ score / 20 * 100}
          strokeLinecap="square"
          strokeWidth={2}
          trailWidth={2} />
      <button onClick={changePage} className="btn">play again</button>
      </div>


    </div>
  )
}

export default Score