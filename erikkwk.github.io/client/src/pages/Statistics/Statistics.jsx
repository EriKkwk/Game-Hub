import axios from "axios";
import React, { useEffect, useState } from "react";
import './Statistics.css'

function Statistics() {

  const [ TicTacToe, setTicTacToe ] = useState(0);
  const [ Cubes, setCubes ] = useState(0);
  const [ RPS, setRPS ] = useState(0);
  const [Rocket, setRocket] = useState(0);
  
  async function getCounts() {
    const response = await axios.get(`http://localhost:8000/auth/getCounts`);
    await [ setTicTacToe, setCubes, setRPS, setRocket ](response.data)
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return <div>
    <div className="statContainer">
      Tic Tac Toe : {TicTacToe}               <br/>
      Cubes : {Cubes}                     <br/>
      Rock Scissors Paper : {RPS}       <br/>
      Rocket : {Rocket}                    <br/>
    </div>
  </div>
}

export default Statistics;