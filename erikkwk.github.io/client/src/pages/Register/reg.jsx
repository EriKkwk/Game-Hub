import './reg.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Register() {
  const[userName, setUserName] = useState('')

  async function createUser() {
    await axios.post('http://localhost:8000/auth/registration',{
       "user_name": userName
    }).then(res => {
      console.log(res)
    })
  }

  const userHandler = (e) =>{
    setUserName(e.target.value)
  }
  const login = event => {
    event.preventDefault()  
    createUser()
    console.log(userName)
  }

  return <div>
      <form onSubmit={login}>
          <input className='reginput' onChange={e=> userHandler(e)} value={userName} type='text' placeholder='User Name'/>
          <button className='regbtn' type='submit'>REGISTER</button>
      </form>
  </div>
}

export default Register;