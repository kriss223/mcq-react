import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { changeName } from '../../redux/reducer'

import "./Login.scss"

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changePage = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    dispatch(changeName(e.target[0].value))
    navigate('/question')
  }
 
  return (
    <>
      
      <div className="login center">
        <div className="login__container">
          <form className='center' onSubmit={changePage}>
            <input className='inputname' type="text" placeholder='Name' required/>
            <button type='submit' className='btn'>Get Start</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login