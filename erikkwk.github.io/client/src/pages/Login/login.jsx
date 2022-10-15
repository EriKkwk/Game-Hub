import './login.css'
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

function Login() {

  const[userName, setUserName] = useState('')


  async function postUser() {
    await axios.post('http://localhost:8000/auth/login',{
       "user_name": userName
    }).then(res => {
      const user = {
        id: res.data.id,
        user_name: res.data.userName
      }
        localStorage.setItem('user', JSON.stringify(user));
    })
  }


  const userHandler = (e) => {
    setUserName(e.target.value)
  }



  const login = event => {
    event.preventDefault() 
    postUser()
    console.log("Successfully login");
  }

  return <div>
    <form onSubmit={login}>
      <input className='logininput' onChange={(e) => userHandler(e)} value={userName} type='text' placeholder='User Name' />
      <button className="loginbtn" type='submit'>LOGIN</button>
    </form>
  </div>
}

export default Login;